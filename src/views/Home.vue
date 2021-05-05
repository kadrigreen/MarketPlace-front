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
            label="Please select location"
            v-model = 'selectedLocation'
            v-on:change="getAdsByLocation()">
            Location
        </v-select>
<!--          Valitud: {{selectedLocation}}
          Vastus: {{locationResponse}}-->
<!--        <button v-on:click="getAdsByLocation()">Location</button>-->
<!--        {{location1}}-->
        <table>
          <tr v-for="location in locationResponse">
            <td>{{location.title}}</td>
            <td>{{location.description}}</td>
            <td>{{location.price}}</td>
            <td>{{location.username}}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: ()=> ({
    items: ['Harju maakond', 'Hiiu maakond', 'Ida-Viru maakond', 'Jõgeva maakond', 'Järva maakond', 'Lääne maakond','Lääne-Viru maakond', 'Põlva maakond', 'Pärnu maakond','Rapla maakond', 'Saare maakond', 'Tartu maakond','Valga maakond','Viljandi maakond', 'Võru maakond'],
    'locationResponse': [],
    'selectedLocation': ''
  }),

  methods: {
    'getAdsByLocation': function (){
      this.$http.get('/api/getAdsByLocation/' + this.selectedLocation)
          .then(response => {
            console.log(response);
            this.locationResponse = response.data
          })
    }
  }


}
</script>
