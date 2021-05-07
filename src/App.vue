<template>
  <v-app>
    <v-app-bar app color="white" flat>
            <v-tabs centered class="ml-9" color="blue lighten-2">
              <v-tab>
                <router-link to="/marketplace">Marketplace</router-link>
              </v-tab>
              <v-tab>
                <router-link to="/addAdvertisement">Add new advertisement</router-link>
              </v-tab>
            </v-tabs>
      <v-avatar class="hidden-sm-and-down" color="blue lighten-2" size="32"></v-avatar>
    </v-app-bar>
<!--    <v-app-bar-->
<!--      app-->
<!--      color="primary"-->
<!--      dark-->
<!--    >-->
<!--      <div class="d-flex align-center">-->
<!--        <v-img-->
<!--          alt="Vuetify Logo"-->
<!--          class="shrink mr-2"-->
<!--          contain-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
<!--          transition="scale-transition"-->
<!--          width="40"-->
<!--        />-->

<!--        <v-img-->
<!--          alt="Vuetify Name"-->
<!--          class="shrink mt-1 hidden-sm-and-down"-->
<!--          contain-->
<!--          min-width="100"-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
<!--          width="100"-->
<!--        />-->
<!--      </div>-->

<!--      <v-spacer></v-spacer>-->

<!--      <v-btn-->
<!--        href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--        target="_blank"-->
<!--        text-->
<!--      >-->
<!--        <span class="mr-2">Latest Release</span>-->
<!--        <v-icon>mdi-open-in-new</v-icon>-->
<!--      </v-btn>-->
<!--    </v-app-bar>-->

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
