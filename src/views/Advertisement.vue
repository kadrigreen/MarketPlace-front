<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="14">
            <v-sheet min-height="80vh" rounded="lg">
              <h1> Title </h1>
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
    'getAdvertisement': function (id) {
      this.$http.get('/api/getAdvertisement/' + id)
          .then(response => {
            console.log(response);
            this.advertisement = response.data
          })
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getAdvertisement(this.$route.params.id)
  }
}

</script>

