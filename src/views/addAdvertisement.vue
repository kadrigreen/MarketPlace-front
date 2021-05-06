<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="32"
      ></v-avatar>

      <v-tabs
          centered
          class="ml-n9"
          color="grey darken-1"
      >
        <v-tab
            v-for="link in links"
            :key="link"
        >
          {{ link}}
        </v-tab>

      </v-tabs>
      <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>


          <v-col
              cols="12"
              sm="9"
          >
            <v-sheet
                min-height="80vh"
                rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () =>
      ({
        items: ['Harju maakond', 'Hiiu maakond', 'Ida-Viru maakond', 'Jõgeva maakond', 'Järva maakond', 'Lääne maakond', 'Lääne-Viru maakond', 'Põlva maakond', 'Pärnu maakond', 'Rapla maakond', 'Saare maakond', 'Tartu maakond', 'Valga maakond', 'Viljandi maakond', 'Võru maakond'],
        'locationResponse': [],
        'selectedLocation': '',
        links: [
          'MarketPlace',
          'Add new advertisement',
          'Profile',
          'Updates',
        ],
      }),
  return: {
    'priceFrom': '',
    'priceTo': '',
    'priceResults': '',
    'resultsByPrice': [],
  },

  methods: {
    'getAdsByPrice': function () {
      this.$http.get('/api/getAdsByPrice/' + this.priceFrom + "/" + this.priceTo)
          .then(response => {
            console.log(response);
            this.resultsByPrice = response.data;
          })
    },
    'getAdsByLocation': function () {
      this.$http.get('/api/getAdsByLocation/' + this.selectedLocation)
          .then(response => {
            console.log(response);
            this.locationResponse = response.data
          })
    }
  },
}
</script>

