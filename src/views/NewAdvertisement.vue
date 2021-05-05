<template>
  <div class="home">
    <h1>Create new advertisement</h1>
    <br>
    <h2>Click here to add a picture</h2>
    <button v-on:click="addPictureButton()">Add picture</button>
    <br>
    <br>
    <h4>Title</h4>
    <input v-model="title" placeholder="Enter title"/>
    <br>
    <h4>Description</h4>
    <input v-model="description" placeholder="Enter description"/>
    <br>
    <h4>Price</h4>
    <input v-model="price" placeholder="Enter price"/>
    <br>
    <h4>Category</h4>
    <input v-model="category" placeholder="Choose category"/>
    <br>
    <h4>Location</h4>
    <input v-model="location" placeholder="Choose location"/>
    <br>
    <h4>Name</h4>
    <input v-model="userName" placeholder="Enter name"/>
    <br>
    <h4>Phone number</h4>
    <input v-model="phoneNumber" placeholder="Enter number"/>
    <br>
    <h4>eMail</h4>
    <input v-model="eMail" placeholder="Enter email"/>
    <br>
    <br>
    <button v-on:click="createAdvertisementButton()">Create advertisement</button>
    {{ advertisement }}
  </div>
</template>

<script>






export default {

  data: function () {


    return {
      'title': '',
      'description': '',
      'price': '',
      'category': '',
      'location': '',
      'userName': '',
      'phoneNumber': '',
      'eMail': '',
      'advertisement': '',




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
            category: this.category,
            location: this.location,
            username: this.userName,
            phonenumber: this.phoneNumber,
            email: this.eMail
          }
      )
          .then(response => {
            console.log(response);
            this.advertisement = response.data;
          })
    }

  }




}


</script>


}

