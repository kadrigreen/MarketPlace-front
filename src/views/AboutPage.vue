<template>
  <div class="home">
    <v-app id="inspire">
      <v-main>
        <v-container>
          <h1>About the company</h1>
          <br>
          <div>

            <p class="text-center">
              <br>
              The number of times Marketplace website is viewed monthly exceeds 20 million times! The purpose of
              Marketplace is
              to offer the best trading environment for all traders, by providing state-of-the-art web technology and
              best solutions.
            <br>
              <br>
              Marketplace was founded in 1999 and it operates under the name of Marketplace OÜ. By today we have become
              the
              largest auction environment in Estonia with more than 800 000 visits per each working day.
            <br>
              <br>
            Our goal is to offer buyers/sellers an efficient environment that allows easy, quick and comfortable way
            to offer goods and services and find a buyer by setting attractive prices.
            <br>
              <br>
              We provide an opportunity to choose various pricing techniques for your products: major format is an
              electronic auction, but there is also an opportunity to sell in fixed price and combined price formats.
              For safe trading we also offer different payment methods – transaction parties may choose between cash
              payment, bank transfer and deposit payment.
              Sales hot shots (active daily users) can perform transactions under favourable conditions.
            </p>

          </div>

        </v-container>
      </v-main>
      <v-footer
          dark
          padless

      >
        <v-card
            class="flex"
            flat
            tile
        >
          <v-card-title class="indigo lighten-3">
            <strong class="subheading">A place, where you can make the best deals!</strong>

          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            ©{{ new Date().getFullYear() }} — <strong>Marketplace</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>
<script>


export default {
  data: function () {
    return {}
  },
  methods: {}
}
</script>


