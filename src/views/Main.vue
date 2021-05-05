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
          {{ link }}
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
              sm="3"
          >
            <v-sheet
                rounded="lg"
                min-height="70vh"
            >
              Filter by Price
              <v-text-field v-model="priceFrom"
                            label="Price"
                            placeholder="Insert minimum price"
                            outlined
              ></v-text-field>
              <v-text-field v-model="priceTo"
                            label="Price"
                            placeholder="Insert maximum price"
                            outlined
              ></v-text-field>
              Filter by Location
              <v-select
                  :items="items"
                  label="Please select location"
                  v-model='selectedLocation'
                  v-on:change="getAdsByLocation()">
              </v-select>
              <v-btn v-on:click="getAdsByPrice" elevation="2"> Filter</v-btn>
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
              cols="12"
              sm="9"
          >
            <v-sheet
                min-height="80vh"
                rounded="lg"
            >
              <table>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Location</th>
                </tr>
                <tr v-for="price in resultsByPrice">
                  <td>{{ price.title }}</td>
                  <td>{{ price.price }}</td>
                  <td>{{ price.location }}</td>
                </tr>
              </table>

              <table>
                <tr v-for="location in locationResponse">
                  <td>{{location.title}}</td>
                  <td>{{location.description}}</td>
                  <td>{{location.price}}</td>
                  <td>{{location.username}}</td>
                </tr>
              </table>
              <!--  -->
            </v-sheet>
          </v-col>

          <!--          <v-col
                        cols="12"
                        sm="2"
                    >
                      <v-sheet
                          rounded="lg"
                          min-height="268"
                      >
                        &lt;!&ndash;  &ndash;&gt;
                      </v-sheet>
                    </v-col>-->
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
          'Dashboard',
          'Messages',
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

