<template>

    <v-slide-group
      multiple
    >
      <v-slide-item
        v-for="n in 25"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-btn
          class="mx-2"
          text
          depressed
          rounded
          @click="toggle"
          height="80px"
        >
          <span class="flex-column align-center justify-center text-center">
            <span class="section-icon"></span>
            <span class="section-text">Options {{ n }}</span>
          </span>

        </v-btn>
      </v-slide-item>
    </v-slide-group>

</template>

<script>
    export default {
        name: "HomeSectionItems"
    }
</script>

<style scoped>
  .section-icon{
    height: 42px;
    width: 42px;
    background-color: #ccc;
    border-radius: 100%;
    display: inline-block;
  }
  .section-text{
    display: block;
    width: 100%;
    text-align: center;
  }
</style>