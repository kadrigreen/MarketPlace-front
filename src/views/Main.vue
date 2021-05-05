<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="32"
      ></v-avatar>

      <v-tabs
          centered
          class="ml-n9"
          color="grey darken-1"
      >
        <v-tab
            v-for="link in links"
            :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
              cols="12"
              sm="3"
          >
            <v-sheet
                rounded="lg"
                min-height="70vh"
            >
              Filter by Price
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
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
              cols="12"
              sm="9"
          >
            <v-sheet
                min-height="80vh"
                rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>

<!--          <v-col
              cols="12"
              sm="2"
          >
            <v-sheet
                rounded="lg"
                min-height="268"
            >
              &lt;!&ndash;  &ndash;&gt;
            </v-sheet>
          </v-col>-->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>

