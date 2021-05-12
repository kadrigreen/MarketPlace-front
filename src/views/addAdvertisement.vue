<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" sm="16">
            <!--            <v-sheet min-height="80vh" rounded="lg">-->
            <h1>Create new advertisement</h1>
            <br>
            <h2>Add a picture</h2>

            <!--    FILE UPLOAD-->

            <div id="app">
              <div class="container">
                <!--UPLOAD-->
                <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                  <h1>Upload images</h1>
                  <div class="dropbox">
                    <input type="file" multiple :name="uploadFieldName" :disabled="isSaving"
                           @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                           accept="image/*" class="input-file">
                    <p v-if="isInitial">
                      Drag your file(s) here to begin<br> or click to browse
                    </p>
                    <p v-if="isSaving">
                      Uploading {{ fileCount }} files...
                    </p>
                  </div>
                  <!--SUCCESS-->
                  <div v-if="isSuccess">
                    <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
                    <p>
                      <a href="javascript:void(0)" @click="reset()">Upload again</a>
                    </p>
                    <ul class="list-unstyled">
                      <li v-for="item in uploadedFiles">
                        <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">
                      </li>
                    </ul>
                  </div>
                  <!--FAILED-->
                  <div v-if="isFailed">
                    <h2>Uploaded failed.</h2>
                    <p>
                      <a href="javascript:void(0)" @click="reset()">Try again</a>
                    </p>
                    <pre>{{ uploadError }}</pre>
                  </div>
                </form>
              </div>
            </div>


            <br>
            <br>
            <h3>Title</h3>
            <v-text-field v-model="title"
                          label="Insert title"
                          outlined
            ></v-text-field>
            <h3>Description</h3>
            <v-textarea v-model="description"
                        outlined
                        name="input-7-4"
                        label="Insert description"
            ></v-textarea>
            <h3>Price</h3>
            <v-text-field v-model="price"
                          label="Insert price"
                          outlined
            ></v-text-field>
            <h3>Category</h3>
            <v-select
                :items="items2"
                label="Please select category"
                v-model='selectedCategory'
                v-on:change="getAdsByCategory()">
              Category
            </v-select>
            <br>
            <h3>Location</h3>
            <v-select
                :items="items"
                label="Please select location"
                v-model='chosenLocation'
                v-on:change="getAdsByLocation()">
              Location
            </v-select>
            <h3>Name</h3>
            <v-text-field v-model="userName"
                          label="Insert name"
                          outlined
            ></v-text-field>
            <h3>Phone number</h3>
            <v-text-field v-model="phoneNumber"
                          label="Insert phone number"
                          outlined
            ></v-text-field>
            <h3>eMail</h3>
            <v-text-field v-model="eMail"
                          label="Insert eMail"
                          outlined
            ></v-text-field>
            <br>
            <v-btn v-on:click="createAdvertisementButton()" elevation="4" color="#00BCD4" block>Create advertisement
            </v-btn>
            <!--              <v-btn v-on:click="createAdvertisementButton()" elevation="2"> Create Advertisement</v-btn>-->
            <!--              <button v-on:click="createAdvertisementButton()">Create Advertisement</button>-->
            {{ advertisement }}
            <br>
            <!--            </v-sheet>-->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

//import { upload } from './file-upload.service'; //????

import axios from "axios";

const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
  name: 'app',
  data: function () {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos',
      fileCount: '',
      'title': '',
      'description': '',
      'price': '',
      'userName': '',
      'phoneNumber': '',
      'eMail': '',
      'advertisement': '',
      items: ['Harju county', 'Hiiu county', 'Ida-Viru county', 'Jõgeva county', 'Järva county', 'Lääne county', 'Lääne-Viru county', 'Põlva county', 'Pärnu county', 'Rapla county', 'Saare county', 'Tartu county', 'Valga county', 'Viljandi county', 'Võru county'],
      'chosenLocationResponse': [],
      'chosenLocation': '',
      'selectedLocation': '',
      items2: ['Cars', 'Electronics', 'Pets', 'Real estate', 'Clothing and shoes', 'Home', 'Books', 'Construction', 'Leisure', 'Products for children'],
      'categoryResponse': [],
      'selectedCategory': '',

    }
  },

  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {

    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    upload(formData) {
      const url = '/api/savePhoto/';
      return axios.post(url, formData)
          // get data
          .then(x => x.data)
          // add url field
          .then(x => x.map(img => Object.assign({},
              img, {url: '${BASE_URL}/images/${img.id}'}))); //????
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      this.upload(formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });

      // save it
      this.save(formData);
    },

    /*    'addPictureButton': function () {
          this.$http.post('/api/addPicture/' ,{

              });
        },*/
    'createAdvertisementButton': function () {
      this.$http.post('/api/createAdvertisement/', {
            title: this.title,
            description: this.description,
            price: this.price,
            category: this.selectedCategory,
            location: this.chosenLocation,
            username: this.userName,
            phonenumber: this.phoneNumber,
            email: this.eMail
          }
      )
          .then(response => {
            console.log(response);
            this.advertisement = "You have created successfully a new advertisement!" + response.data;
          })
    },
    'getAdsByLocation': function () {
      this.$http.get('/api/getAdsByLocation/' + this.chosenLocation)
          .then(response => {
            console.log(response);
            this.chosenLocationResponse = response.data
          })
    },
    'getAdsByCategory': function () {
      this.$http.get('/api/getAdsByCategory/' + this.selectedCategory)
          .then(response => {
            console.log(response);
            this.categoryResponse = response.data
          })
    }
  },
  mounted() {
    this.reset();
  },
}

</script>

<!-- SASS styling -->
<style lang="scss">
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightgray;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: whitesmoke; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>