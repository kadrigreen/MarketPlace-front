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
    <input v-model="price1" placeholder="Price from"/>
    <input v-model="price1" placeholder="Price to"/>
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
      'location1': ''
    }
  }
}
</script>
