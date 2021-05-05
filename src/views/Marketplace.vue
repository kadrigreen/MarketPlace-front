<template>
  <div class="home">
    <v-app id="inspire">
      <v-main class="grey lighten-3">
        <v-container>
          <h1>Marketplace</h1>
          <br>
          <h2>Search for an advertisement</h2>
          <br>
          <h4>Category</h4>
          <input v-model="category1" placeholder="Choose category"/>
          <br>
          <h4>Price</h4>
          <input v-model="price1" placeholder="Price from"/>
          <input v-model="price1" placeholder="Price to"/>
          <br>
          <h4>Location</h4>
          <input v-model="location1" placeholder="Choose location"/>
          <br>
          <button v-on:click="getAllAdvertisementsButton()">Search</button>
          {{ getAllAdvertisements }}
          <br>
          <h3>All Advertisement</h3>
          <table>
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Location</th>
            </tr>
            <tr v-for="advertisement in advertisements">
              <td>{{ advertisement.description }}</td>
              <br>
              <td>{{ advertisement.price }}</td>
              <br>
              <td>{{ advertisement.location }}</td>
              <td>{{ advertisement }}</td>
            </tr>
          </table>
          <button v-on:click="getAllAdvertisementsButton()">Search</button>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'category1': '',
      'price1': '',
      'location1': '',
      advertisements: []
    }
  },
  methods: {
    'getAllAdvertisementsButton': function () {
      this.$http.put('/api/getAllAdvertisements/', {
        advertisements: this.advertisements
      })
          .then(response => {
            console.log(response);
            this.advertisements = response.data
          });
    },
  },

  mounted() {
    this.$http.get("/api/getAllAdvertisements/")
        .then(response => this.advertisements = response.data);
  }
}
</script>


