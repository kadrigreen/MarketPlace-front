<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="14">
            <v-sheet min-height="80vh" rounded="lg">
              <h1> Title </h1>
              <a to="/advertisement/{{ads.id}}">{{ ads.title }}</a>
              <br>
              <h2>Photo</h2>
              <br>
              <h4>Description</h4>
              <a to="/advertisement/{{ads.id}}">{{ ads.description }}</a>
              <br>
              <h4>Price</h4>
              <a to="/advertisement/{{ads.id}}">{{ ads.price }}</a>
              <br>
              <h4>Category</h4>
              <a to="/advertisement/{{ads.id}}">{{ ads.category }}</a>
              <br>
              <h4>Location</h4>
              <a to="/advertisement/{{ads.id}}">{{ ads.location }}</a>
              <h4>Seller</h4>
              <a to="/advertisement/{{ads.id}}">{{ ads.username }}</a>
              <br>
              <h4>Phone number</h4>
              <a to="/advertisement/{{ads.id}}">{{ ads.phonenumber }}</a>
              <br>
              <h4>eMail</h4>
              <a to="/advertisement/{{ads.id}}">{{ ads.email }}</a>

              <br>
            </v-sheet>
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

      'id': '',
      'title': '',
      'description': '',
      'price': '',
      'username': '',
      'phonenumber': '',
      'email': '',
      'advertisement': '',
    }
  },
  methods: {
    'getAdvertisement': function () {
      this.$http.get('/api/getAdvertisement/' + this.id)
          .then(response => {
            console.log(response);
            this.advertisement = response.data
          })
    },
  }
}

</script>

