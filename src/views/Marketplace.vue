<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-5">
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
              Search
              <v-select
                  :items="categories"
                  label="Select category"
                  v-model='selectedCategory'>
              </v-select>
              <v-select
                  :items="locations"
                  label="Select location"
                  v-model='selectedLocation'>
              </v-select>
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
              <v-text-field v-model="searchText"
                            label="Text"
                            placeholder="Insert search text"
                            outlined
              ></v-text-field>

              <v-btn v-on:click="getAdsBySearch" elevation="2"> Search</v-btn>
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
              <table  border="1">
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Location</th>
                </tr>
                <tr v-for="ads in searchResults">
                  <td><router-link :to="'/Advertisement/'+ads.id">{{ ads.title }}</router-link></td>
                  <td>{{ ads.price }}</td>
                  <td>{{ ads.location }}</td>
                </tr>
              </table>
              <!--  -->
            </v-sheet>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-toolbar
        class="mt-2"
        color="blue lighten-3"
        dark
        flat
    >
      <v-toolbar-title class="subheading">
        A place, where you can make the best deals!
      </v-toolbar-title>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      locations: ['','Harju county', 'Hiiu county', 'Ida-Viru county', 'Jõgeva county', 'Järva county', 'Lääne county', 'Lääne-Viru county', 'Põlva county', 'Pärnu county', 'Rapla county', 'Saare county', 'Tartu county', 'Valga county', 'Viljandi county', 'Võru county'],
      categories: ['', 'Cars', 'Electronics', 'Pets', 'Real estate', 'Clothing and shoes', 'Home', 'Books', 'Construction', 'Leisure', 'Products for children'],
      'selectedLocation': '',
      'selectedCategory': '',
      'searchResults': [],
      'priceFrom': '',
      'priceTo': '',
      'searchText':''
    }
  },

  methods: {
    'getAdsBySearch': function () {
      this.$http.get('/api/filterAdsByPriceCategoryLocation/', {
        params: {
          a: this.selectedCategory,
          b: this.selectedLocation,
          c: this.priceFrom,
          d: this.priceTo,
          e: this.searchText,

        }
      })
          .then(response => {
            console.log(response);
            this.searchResults = response.data;
          })
    }
  }
}
</script>

