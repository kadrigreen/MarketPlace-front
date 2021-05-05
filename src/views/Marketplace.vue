<template>
  <div class="home">
    <h1>Marketplace</h1>
    <br>
    <h3>Serach for an advertisement</h3>
    <br>
    <h4>Category</h4>
    <input v-model="category1" placeholder="Choose category"/>
    <br>
    <h4>Price</h4>
    <input v-model="priceFrom" placeholder="Price from"/>
    <input v-model="priceTo" placeholder="Price to"/>
    <button v-on:click="getAdsByPrice">Insert</button>
    {{priceResults}}
    <br>
    <h4>Location</h4>
    <input v-model="location1" placeholder="Choose location"/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'category1': '',
      'price1': '',
      'location1': '',
      'priceFrom':'',
      'priceTo':'',
      'priceResults':'',
    }
  },
  methods: {
    'getAdsByPrice': function (){
      this.$http.get('/api/getAdsByPrice/'+this.priceFrom+"/"+this.priceTo)
      .then(response=>{
        console.log(response);
        this.priceResults = response.data;
      })
    },
  },
  mounted() {
    this.$http.get('/api/getAdsByPrice/'+this.priceFrom+"/"+this.priceTo)
    .then (response=> this.)
  }
}
</script>
