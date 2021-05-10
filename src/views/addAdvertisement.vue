<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" sm="16">
<!--            <v-sheet min-height="80vh" rounded="lg">-->
              <h1>Create new advertisement</h1>
              <br>
              <h2>Click here to add a picture</h2>
              <button v-on:click="addPictureButton()">Add picture</button>
              <br>
              <br>
              <h3>Title</h3>
            <v-text-field v-model="title"
                          label="Insert title"
                          outlined
            ></v-text-field>
              <h3>Description</h3>
            <v-textarea
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
                  v-model = 'selectedCategory'
                  v-on:change="getAdsByCategory()">
                Category
              </v-select>
              <br>
              <h3>Location</h3>
              <v-select
                  :items="items"
                  label="Please select location"
                  v-model = 'chosenLocation'
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
            <v-btn v-on:click="createAdvertisementButton()" elevation="4" color="#00BCD4" block  >Create advertisement</v-btn>
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
export default {
  data: function () {
    return {
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
      // links: [
      //   'Marketplace',
      //   'Add new advertisement',
      //   'Information',
      //   'Updates',
      // ],
    }
  },
  methods: {
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
  }
}

</script>

