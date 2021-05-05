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


<!--    <Dropdown-->
<!--        :options="[{ id: 1, name: 'Harju maakond'}, { id: 2, name: 'Hiiu maakond'}]"-->
<!--        v-on:selected="location1"-->
<!--        v-on:filter="getAdsByLocation"-->
<!--        :disabled="false"-->
<!--        name="location"-->
<!--        :maxItem="2"-->
<!--        placeholder="Please select an option">-->
<!--      {{getAds}}-->
<!--    </Dropdown>-->


<!--    <select v-model="location1" name="location">-->
<!--      <button v-on:click="getAdsByLocation()">Enter</button>-->
<!--      {{getAds}}-->



<!--      <option value="Harju maakond">Harju maakond</option>-->
<!--      <option value="Hiiu maakond">Hiiu maakond</option>-->
<!--      <option value="Ida-Viru maakond">Ida-Viru maakond</option>-->nu
<!--      <option value="Jõgeva maakond">Jõgeva maakond</option>-->
<!--      <option value="Järva maakond">Järva maakond</option>-->
<!--      <option value="Lääne maakond">Lääne maakond</option>-->
<!--      <option value="Lääne-Viru maakond">Lääne-Viru maakond</option>-->
<!--      <option value="Ida-Viru maakond">Ida-Viru maakond</option>-->
<!--      <option value="Põlva maakond">Põlva maakond</option>-->
<!--      <option value="Pärnu maakond">Pärnu maakond</option>-->
<!--      <option value="Rapla maakond">Rapla maakond</option>-->
<!--      <option value="Saare maakond">Saare maakond</option>-->
<!--      <option value="Tartu maakond">Tartu maakond</option>-->
<!--      <option value="Valga maakond">Valga maakond</option>-->
<!--      <option value="Viljandi maakond">Viljandi maakond</option>-->
<!--      <option value="Võru maakond">Võru maakond</option>-->
<!--    </select>-->




  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'category1': '',
      'price1': '',
      'location1': '',

      // 'getAds':'',
      // 'Harju maakond': '',
      // 'Hiiu maakond': ''


    }
  },


  // methods: {
  //
  //   'getAdsByLocation': function (){
  //     this.$http.get('/api/getAdsByLocation/' + this.location1)
  //         .then(response => {
  //           console.log(response);
  //           this.getAds = response.data
  //         })
  //
  //
  //
  //   }
  // }





}
</script>
