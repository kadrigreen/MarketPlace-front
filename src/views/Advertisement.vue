

<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="14">
            <v-sheet min-height="80vh" rounded="lg">
              <v-card
                  :loading="loading"
                  class="mx-auto my-12"
                  max-width="674"
              >
                <template slot="progress">
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                    height="350"
                 v-bind:src="'/api/getPhoto?photoId='+advertisement.id"
                ></v-img>


                <v-card-title>{{ advertisement.title }}</v-card-title>


                <v-card-text>

                  <v-row
                      align="center"
                      class="mx-0"
                  >
                  </v-row>
                  <div class="my-4 subtitle-1">

                    <v-icon
                      medium
                      color="grey darken-2">
                    mdi-cash-multiple
                  </v-icon> {{ advertisement.price }} €
                  </div>
                  <div class="my-4 subtitle-2">
                    <v-icon
                        medium
                        color="grey darken-2">
                      mdi-clock-time-four-outline
                    </v-icon> {{ new Date() }}
                  </div>
                  <div>
                    <v-icon
                        medium
                        color="grey darken-2">
                      mdi-map-marker-radius
                    </v-icon> {{ advertisement.location }}
                  </div>
                  <br>
                  <div class="my-4 subtitle-2"> Description</div>
                  <div>
                    {{ advertisement.description }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title> Contact seller</v-card-title>
                <v-card-text>
                  <v-row
                      align="center"
                      class="mx-0"

                  >
                  </v-row>
                  <div class="my-4 subtitle-1">
                    <v-icon
                        medium
                        color="grey darken-2">
                      mdi-account
                    </v-icon>  {{ advertisement.username }}
                  </div>

                  <div class="my-4 subtitle-1">
                    <v-icon
                        medium
                        color="grey darken-2">
                      mdi-cellphone
                    </v-icon> +372 {{ advertisement.phonenumber }}
                  </div>
                  <div class="my-4 subtitle-1">
                    <v-icon
                        medium
                        color="grey darken-2">
                      mdi-email
                    </v-icon> {{ advertisement.email }}
                  </div>
                </v-card-text>
              </v-card>

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
      'date': '',
      'description': '',
      'price': '',
      'username': '',
      'phonenumber': '',
      'email': '',
      'advertisement': '',
      'photoId':'',
      'photo':'',
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
    /*'getPhoto': function (id){
      this.$http.get('/api/getPhoto/'+id)
      .then(response=> {
        console.log(response);
        this.photo=response.data
      })
    }*/
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getAdvertisement(this.$route.params.id)
  },
}

</script>

