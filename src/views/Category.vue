<template>

  <div id="app">
    <v-app id="inspire">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="3">

              <v-text-field
                  label="Search"
                  placeholder="Search ads by keyword here"
                  outlined
                  v-model = 'searchedInput'
                  v-on:change="searchAdsByTitleDescription()">
              </v-text-field>

              <table>
              <tr v-for="input in inputResponse">
                <td>{{ input.title }}</td>
                <td>{{ input.description }}</td>
                <td>{{ input.price }}</td>
                <td>{{ input.category }}</td>
                <td>{{ input.location }}</td>
                <td>{{ input.username }}</td>
                <td>{{ input.phonenumber }}</td>
                <td>{{ input.email }}</td>
              </tr>
              </table>

            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-app>
  </div>


</template>

<script>
export default {
  data: ()=> ({
    'searchedInput': '',
    'inputResponse': []
  }),

  methods: {
    'searchAdsByTitleDescription': function (){
      this.$http.get('/api/searchAdsByTitleDescription/' + this.searchedInput)
          .then(response => {
            console.log(response);
            this.inputResponse = response.data
          })
    }
  }

}
</script>

