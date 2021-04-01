<template>
  <div class="d-inline-flex align-center">
    <VueLogo
      alt="Vuetify Logo"
      class="shrink"
      contain
      transition="scale-transition"
      width="40"
    />
    <span>Super Store</span>
  </div>
</template>

<script>
  import VueLogo from '@/assets/logo.svg';

  export default {
    name: "SiteLogo",
    components:{
      VueLogo
    }
  }
</script>

<style scoped>

</style>