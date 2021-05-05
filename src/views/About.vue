<template>
  <div class="about">
    <h1>Marketplace</h1>
    <v-app>
      <v-app-bar app></v-app-bar>
      <v-main>
        <v-container>
          <h3>Price</h3>
          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field v-model="priceFrom"
                          label="Price"
                          placeholder="Insert minimum price"
                          outlined
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field v-model="priceTo"
                          label="Price"
                          placeholder="Insert maximum price"
                          outlined
            ></v-text-field>
          </v-col>
          <v-btn v-on:click="getAdsByPrice" elevation="2"> Filter</v-btn>
          <br>
         <table border="2">
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
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      'priceFrom': '',
      'priceTo': '',
      'priceResults': '',
      'resultsByPrice': []
    }
  },

  methods: {
    'getAdsByPrice': function () {
      this.$http.get('/api/getAdsByPrice/' + this.priceFrom + "/" + this.priceTo)
          .then(response => {
            console.log(response);
            this.resultsByPrice = response.data;
          })
    },
  },
}
</script>

