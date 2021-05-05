<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
          class="d-flex"
          cols="12"
          sm="6"
      >
        <v-select
            :items="items"
            label="Please select category"
            v-model = 'selectedCategory'
            v-on:change="getAdsByCategory()">
            Category
        </v-select>
        <table>
          <tr v-for="category in categoryResponse">
            <td>{{category.title}}</td>
            <td>{{category.description}}</td>
            <td>{{category.price}}</td>
            <td>{{category.username}}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: ()=> ({
    items: ['Cars', 'Electronics', 'Pets', 'Real estate', 'Clothing and shoes', 'Home', 'Books', 'Construction', 'Leisure', 'Products for children'],
    'categoryResponse': [],
    'selectedCategory': ''
  }),

  methods: {
    'getAdsByCategory': function (){
      this.$http.get('/api/getAdsByCategory/' + this.selectedCategory)
          .then(response => {
            console.log(response);
            this.categoryResponse = response.data
          })
    }
  }


}
</script>
