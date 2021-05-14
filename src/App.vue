<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>

      <div class="d-flex align-center">
        <a href="http://localhost:8080/?#/marketplace">
          <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://pic.onlinewebfonts.com/svg/img_544110.png"
              transition="scale-transition"
              width="90"
          />
        </a>
      </div>

      <v-tabs centered class="ml-n9" color="grey darken-1" >
        <v-tab>
          <router-link to="/marketplace">Marketplace </router-link>
          <v-icon large color="black">mdi-domain</v-icon>
        </v-tab>
        <v-tab>
          <router-link to="/addAdvertisement">Add new advertisement </router-link>
          <v-icon large color="black">mdi-arrow-up-bold-box-outline</v-icon>
        </v-tab>
        <v-tab>
          <router-link to="/AboutPage">About </router-link>
          <v-icon large color="black">mdi-information-outline</v-icon>
        </v-tab>
      </v-tabs>
    </v-app-bar>



      <v-main class="grey lighten-3">
      <router-view/>
    </v-main>


  </v-app>

 </template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
