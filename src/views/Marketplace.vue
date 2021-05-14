<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-5">

      <!--                Search bar-->
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="12">

              <v-text-field
                  label="Search"
                  placeholder="Search ads by keyword here"
                  outlined color="black" background-color="white"
                  v-model='searchedInput'
                  v-on:change="searchAdsByTitleDescription(); isHidden1=true">
              </v-text-field>

              <!--            Search bar      V-card-->
              <v-card v-for="input in inputResponse"
                      :loading="loading"
                      class="mx-auto my-12"
                      max-width="374"
              >
                <template slot="progress">
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                    height="250"
                    v-bind:src="'/api/getPhoto?photoId='+input.id"
                ></v-img>

                <v-card-title><router-link :to="'/Advertisement/'+input.id">{{ input.title }}</router-link></v-card-title>

                <v-card-text>
                  <v-row
                      align="center"
                      class="mx-0"
                  >
                  </v-row>

                  <div class="my-4 subtitle-1">
                    {{ input.price }}€ • {{ input.location }}
                  </div>

                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title> Contact: {{ input.username }} </v-card-title>

                <v-card-actions>
                  <v-tooltip
                      v-model="show"
                      top
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          color="deep-purple lighten-2"
                          v-bind="attrs"
                          v-on="on"
                      >
                        Contact seller
                      </v-btn>
                    </template>
                    <span> Phone: {{ input.phonenumber }}, Email: {{ input.email }} </span>
                  </v-tooltip>
                </v-card-actions>

              </v-card>
              <!--        Search bar    V-card-->

            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <!--                Search bar-->

      <v-container
          v-if="!isHidden1">

        <h2>
          Advanced search
        </h2>

        <v-row
            align="center"
            class="mx-0"
            Advanced search
        >
        </v-row>

        <v-row>
          <v-col
              cols="12"
              sm="3"
          >
            <v-sheet
                rounded="lg"
                min-height="55vh"
            >
              <v-select
                  :items="categories"
                  label="Select category"
                  height="55"
                  outlined
                  v-model='selectedCategory'>
              </v-select>
              <v-select
                  :items="locations"
                  label="Select location"
                  outlined
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


              <v-select
                  :items="sorting"
                  label="Sort By"
                  outlined
                  v-model='selectedOption'>
              </v-select>



              <v-btn v-on:click="getAdsBySearch(); isHidden2=true" elevation="4" color="#00BCD4" block  > Search</v-btn>

              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
              cols="18"
              sm="9"
          >
            <v-sheet
                min-height="55vh"
                rounded="lg">

              <!--        getAllAdvertisements-->
              <v-container
                  v-if="!isHidden2">
                <v-row>
                  <v-card
                      v-for="advertisement in advertisements"
                      :loading="loading"
                      class="mx-auto my-12"
                      max-width="210"
                  >
                    <template slot="progress">
                      <v-progress-linear
                          color="deep-purple"
                          height="10"
                          indeterminate
                      ></v-progress-linear>
                    </template>

                    <v-img
                        height="200"
                        v-bind:src="'/api/getPhoto?photoId='+advertisement.id"
                    ></v-img>

                    <v-card-title><router-link :to="'/Advertisement/'+advertisement.id">{{ advertisement.title }}</router-link></v-card-title>

                    <v-card-text>
                      <v-row
                          align="center"
                          class="mx-0"
                      >
                      </v-row>

                      <div class="my-4 subtitle-1">
                        {{ advertisement.price }}€ • {{ advertisement.location }}
                      </div>

                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-actions>
                      <v-tooltip
                          v-model="show"
                          top
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                              color="deep-purple lighten-2"
                              v-bind="attrs"
                              v-on="on"
                          >
                            Contact seller
                          </v-btn>
                        </template>
                        <span> Phone: {{ advertisement.phonenumber }}, Email: {{ advertisement.email }} </span>
                      </v-tooltip>
                    </v-card-actions>

                  </v-card>


                </v-row>
              </v-container>

              <!--        getAllAdvertisements-->
















<!--                        5 Search  V-card-->
              <v-card v-for="ads in searchResults"
                  :loading="loading"
                  class="mx-auto my-12"
                  max-width="374"
              >
                <template slot="progress">
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                    height="250"
                    v-bind:src="'/api/getPhoto?photoId='+ads.id"
                ></v-img>

                <v-card-title><router-link :to="'/Advertisement/'+ads.id">{{ ads.title }}</router-link></v-card-title>

                <v-card-text>
                  <v-row
                      align="center"
                      class="mx-0"
                  >
                  </v-row>

                  <div class="my-4 subtitle-1">
                    Date added: {{new Date}}
                    <br>
                    {{ ads.price }}€ • {{ ads.location }}
                  </div>

                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title> Contact: {{ ads.username }} </v-card-title>

                <v-card-actions>
                  <v-tooltip
                      v-model="show"
                      top
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          color="deep-purple lighten-2"
                          v-bind="attrs"
                          v-on="on"
                      >
                        Contact seller
                      </v-btn>
                    </template>
                    <span> Phone: {{ ads.phonenumber }}, Email: {{ ads.email }} </span>
                  </v-tooltip>
                </v-card-actions>

              </v-card>
<!--                        5 Search V-card-->

              <!--  -->
            </v-sheet>

          </v-col>
        </v-row>



<!--        getAllAdvertisements-->
<!--        <v-container>-->
<!--          <v-row>-->
<!--        <v-card-->
<!--                v-for="advertisement in advertisements"-->
<!--                :loading="loading"-->
<!--                class="mx-auto my-12"-->
<!--                max-width="210"-->
<!--        >-->
<!--          <template slot="progress">-->
<!--            <v-progress-linear-->
<!--                color="deep-purple"-->
<!--                height="10"-->
<!--                indeterminate-->
<!--            ></v-progress-linear>-->
<!--          </template>-->

<!--          <v-img-->
<!--              height="200"-->
<!--              v-bind:src="'/api/getPhoto?photoId='+advertisement.id"-->
<!--          ></v-img>-->

<!--          <v-card-title><router-link :to="'/Advertisement/'+advertisement.id">{{ advertisement.title }}</router-link></v-card-title>-->

<!--          <v-card-text>-->
<!--            <v-row-->
<!--                align="center"-->
<!--                class="mx-0"-->
<!--            >-->
<!--            </v-row>-->

<!--            <div class="my-4 subtitle-1">-->
<!--              {{ advertisement.price }}€ • {{ advertisement.location }}-->
<!--            </div>-->

<!--          </v-card-text>-->

<!--          <v-divider class="mx-4"></v-divider>-->
<!--          -->
<!--          <v-card-actions>-->
<!--            <v-tooltip-->
<!--                v-model="show"-->
<!--                top-->
<!--            >-->
<!--              <template v-slot:activator="{ on, attrs }">-->
<!--                <v-btn-->
<!--                    color="deep-purple lighten-2"-->
<!--                    v-bind="attrs"-->
<!--                    v-on="on"-->
<!--                >-->
<!--                  Contact seller-->
<!--                </v-btn>-->
<!--              </template>-->
<!--              <span> Phone: {{ advertisement.phonenumber }}, Email: {{ advertisement.email }} </span>-->
<!--            </v-tooltip>-->
<!--          </v-card-actions>-->

<!--        </v-card>-->


<!--          </v-row>-->
<!--        </v-container>-->

<!--        getAllAdvertisements-->


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
import axios from "axios";

export default {
  data: function () {
    return {
      locations: ['', 'Harju county', 'Hiiu county', 'Ida-Viru county', 'Jõgeva county', 'Järva county', 'Lääne county', 'Lääne-Viru county', 'Põlva county', 'Pärnu county', 'Rapla county', 'Saare county', 'Tartu county', 'Valga county', 'Viljandi county', 'Võru county'],
      categories: ['', 'Cars', 'Electronics', 'Pets', 'Real estate', 'Clothing and shoes', 'Home', 'Books', 'Construction', 'Leisure', 'Products for children'],
      'selectedLocation': '',
      'selectedCategory': '',
      'searchResults': [],
      'priceFrom': '',
      'priceTo': '',
      'date':'',

      'searchedInput': '',
      'inputResponse': [],
      isHidden1: false,
      isHidden2: false,

      'searchText':'',


      sorting: ['', 'Price: lowest first', 'Price: highest first', 'Date added: newest', 'Date added: oldest'],
      'selectedOption': '',

      photoId: [],

      advertisements: []


    }
  },

  methods: {
    'getAdsBySearch': function () {
      let orderByColumn = ""
      let orderByDirection = "";
      if(this.selectedOption == 'Price: lowest first'){
        orderByColumn = 'price'
        orderByDirection = 'asc'
      }
      if(this.selectedOption == 'Price: highest first'){
        orderByColumn = 'price'
        orderByDirection = 'desc'
      }
      if(this.selectedOption == 'Date added: newest'){
        orderByColumn = 'time'
        orderByDirection = 'asc'
      }
      if(this.selectedOption == 'Date added: oldest'){
        orderByColumn = 'time'
        orderByDirection = 'desc'
      }

      this.$http.get('/api/filterAdsByPriceCategoryLocation/', {
        params: {
          a: this.selectedCategory,
          b: this.selectedLocation,
          c: this.priceFrom,
          d: this.priceTo,
          e: this.searchText,
          f: orderByColumn,
          g: orderByDirection

        }
      })
          .then(response => {
            console.log(response);
            this.searchResults = response.data;
          })
    },

    'searchAdsByTitleDescription': function () {
      this.$http.get('/api/searchAdsByTitleDescription/' + this.searchedInput)
          .then(response => {
            console.log(response);
            this.inputResponse = response.data
          })
    },
    'getPhoto': function (){
         this.$http.get('/api/getPhoto')
      .then ((response) => {
      this.photoId = response.data.data;
      })
    },



  },
  mounted() {
    this.getPhoto();


    this.$http.get('/api/getAllAdvertisements/')
        .then(response => this.advertisements = response.data);





  }
}
</script>



