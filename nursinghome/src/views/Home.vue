<template>
  <div>
    <div id="app">
    <v-app id="inspire">
      <v-carousel
      cycle :interval="interval"
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
      >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        
        
      ></v-carousel-item>
      
      
    </v-carousel>
  </v-app>
</div>
  </div>
</template>

<script>


  export default {
    name: 'Home',
  data () {
    return {
      interval: 3000,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
         
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
         
        },
      ],

    }
  },
}
  
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>