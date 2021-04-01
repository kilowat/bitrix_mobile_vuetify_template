<template>
  <div class="header">
    <v-app-bar
      hide-on-scroll
      app
      color="primary"
      :dark="!$vuetify.theme.isDark">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="$router.history.current.path == '/'"
      >
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon @click="$router.go(-1)" v-else>
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <SiteLogo/>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <router-link to="/about">About</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>

</template>

<script>
  import SiteLogo from '@/components/header/SiteLogo';
  export default {
    name: "TheHeader",
    components: {
      SiteLogo,
    },
    data: () => ({
      drawer: false,
      group: null,
      transitionName: "",
    }),
    watch: {
      group() {
        this.drawer = false;
      },
    },
  }
</script>

<style scoped>

</style>