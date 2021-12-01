<template>

<div>
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

<div id="app">
  <v-app id="inspire">
    <v-system-bar lights-out></v-system-bar>
      <v-carousel cycle :interval="interval" height="600" hide-delimiter-background show-arrows-on-hover delimiter-icon="mdi-minus">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            
          >
          <div v-bind:text="item[i]">
            {{item.text}}
          </div>
          <button v-bind:button="item[i]">
            <router-link :to="{ name: 'Galerija' }"> {{item.button}} </router-link>
          </button>
        </v-row>
        </v-carousel-item>
      </v-carousel>
  </v-app>
</div>

<!-- <div class="columns is-mobile is-centered">
  <div class="column is-half">
    <p class="bd-notification is-primary">
      <code class="html">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem autem repudiandae nulla quasi! Recusandae commodi, alias nostrum repudiandae sequi ab facere impedit maiores modi, aperiam sapiente quasi iste debitis?</code><br>
    </p>
  </div>
</div>

<div class="columns">
  <div class="column">
    First column
  </div>
  <div class="column">
    Second column
  </div>
  <div class="column">
    Third column
  </div>
  <div class="column">
    Fourth column
  </div>
</div> -->


<div class="columns is-gapless is-multiline is-desktop" id="prvii">
  <div class="column is-half" >
  <div class="naslov">Pogledaj galeriju</div>
  <hr class="title-underline" style="background: blue;" />
  <div id="prvi-tekst" style="@media screen and(max-width: 800px) {
  font-size: 10px; color: black; 
  }">
    Pogledajte sve slike naseg doma. 
    Unutrasnjost i spoljanost
    
  </div>
  <router-link :to="{name: 'Galerija'}"><button class="button is-info is-blue">Galerija</button></router-link>
  </div>
  <div class="column is-half">
    <img style="width: 600px;
  height: 450px;"
      src="../assets/VRF_0501.jpg">
  </div>
</div>



<div class="columns is-gapless is-multiline is-desktop" id="prvii">
  
  <div class="column is-half" > 
    <img style="width: 600px;
  height: 450px;"  src="../assets/VRF_0501.jpg">
  </div>
 
  <div class="column is-half">
    <div class="naslov">Pogledaj galeriju</div>
    <hr class="title-underline" style="background: blue;" />
    <div id="prvi-tekst">
      Pogledajte sve slike naseg doma. 
      Unutrasnjost i spoljanost
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit minima ullam fuga natus autem voluptas eius dolorem non iusto, vitae nulla alias deleniti. Nam blanditiis minima beatae facilis. Magnam?
    </div>
  <router-link :to="{name: 'Galerija'}"><button class="button is-info is-blue">Galerija</button></router-link>
  </div>
</div>


<div class="mapa">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5613.664231913402!2d19.73064744517446!3d45.29161412719782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b138aa73e54b5%3A0x7f4570a753510f09!2sStaracki%20dom%20KLISARIC%20DOM!5e0!3m2!1ssr!2srs!4v1638349930233!5m2!1ssr!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>



</div>
</template>

<script>
import image from '../assets/VRF_0496.jpg'
import image2 from '../assets/VRF_0498.jpg'
import image3 from '../assets/VRF_0499.jpg'
import image4 from '../assets/VRF_0500.jpg'


  export default {
    name: 'Home',
  data () {
    return {
      
      interval: 3000,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          text: "Pogledajte nasu galeriju",
          button: 'Galerija'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          text: "AAA"
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          text: "Galeaaaaarija"
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          text: "Galerija"
        },
      ],

    }
  },
}
  
</script>

<style lang="scss" scoped>

iframe {
  width: 100%;
  padding: 30px;
}

img {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#prvi-tekst {
  
  font-size: 20px;
  margin-bottom: 5%;
  margin-left: 20%;
  margin-right: 20%;
}
.naslov {
  margin-top: 5%;
  font-size: 26px;
  text-align: center;
  margin-bottom: -2%;
}
#prvii {
  margin: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
  
}

@media screen and(min-width: 800px) {
  #prvi {
    font-size: 5px;
  }
}
</style>