<template>
  <v-app>
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
        <v-icon>{{ mdiArrowLeft }}</v-icon>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <SiteLogo/>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>{{ mdiMagnify }}</v-icon>
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
    <v-main class="mt-2">

        <TransitionPage>
          <router-view>

          </router-view>
        </TransitionPage>

    </v-main>
    <v-bottom-navigation
      fixed
      color="teal"
      grow
      height="38px"
    >
      <v-btn>
        <v-icon>{{ mdiAccount }}</v-icon>
      </v-btn>

      <v-btn>
        <v-icon>{{ mdiInformationOutline }}</v-icon>
      </v-btn>

      <v-btn>
        <v-icon>{{ mdiCog }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import SiteLogo from '@/components/header/SiteLogo';
  import TransitionPage from '@/components/TransitionPage';
  import { mdiMagnify, mdiArrowLeft, mdiAccount, mdiInformationOutline, mdiCog } from '@mdi/js'
  import PullToRefresh from 'pulltorefreshjs';

  export default {
    name: "App",

    computed: {
      ...mapState('example', {
        count: state => state.count,
      })
    },

    components: {
      SiteLogo,
      TransitionPage
    },

    data: () => ({
      drawer: false,
      group: null,
      transitionName: "",
      mdiMagnify,
      mdiArrowLeft,
      mdiAccount,
      mdiInformationOutline,
      mdiCog
    }),

    mounted() {
      this.$store.dispatch('example/fetchCount');
      const ptr = PullToRefresh.init({
        mainElement: 'main',
        distThreshold: 70,
          onRefresh() {
          window.location.reload();
        }
      });
    },

    methods: {
      ...mapActions('example', [
        'fetchCount'
      ])
    },

    watch: {
      group() {
        this.drawer = false;
      },

    },
  };
</script>
<style lang="scss">

</style>