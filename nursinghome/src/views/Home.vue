<template>

<div>
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

<div id="app">
  <v-app v-show="!mobile" id="inspire">
    <v-system-bar lights-out></v-system-bar>
      <v-carousel  class="v-carousel" cycle :interval="interval" height="600"  hide-delimiter-background show-arrows-on-hover delimiter-icon="mdi-minus">
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
  <div id="app" v-show="mobile">
  <v-app id="inspire">
    <v-system-bar lights-out></v-system-bar>
      <v-carousel class="v-carousel" cycle :interval="interval" height="300"  hide-delimiter-background show-arrows-on-hover delimiter-icon="mdi-minus">
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

     <section class="page-sectionour ">
        <div class="container ">
            <div class="row">
                <div class="col-md-4 ">
                    <div class="col-xs-2 box-icon">
                        <div class="fas fa-home fa-2x"></div>
                    </div>
                    <div class="col-xs-10">
                        <h5 class="title">Starački dom Klisarić</h5>
                        
                    </div>
                    <div class="col-md-12">
                        <p>
                          Starački dom Klisarić je novo izgrađen objekat po meri i potrebama starih i bolesnih
                          lica kojima je neophodna nega.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="col-xs-2 box-icon">
                        <div class="fas fa-user-md fa-2x"></div>
                    </div>
                    <div class="col-xs-10">            
                        <h5 class="title">Medicinska nega u domu</h5>
                    </div>
                    <div class="col-md-12">
                        <p>
                            Naš dom za stara lica obezbeđuje svakom korisniku doma
                            svu potrebnu medicinsku negu i negovateljice.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="col-xs-2 box-icon">
                        <div class="far fa-clock fa-2x"></div>
                    </div>
                    <div class="col-xs-10">
                       
                        <h5 class="title">Nadzor 24/7</h5>
                    </div>
                    <div class="col-md-12">
                        <p>
                          Osoblje našeg staračkog doma je na raspolaganju svim korisnicima 
                          neprekidno 24 časa dnevno sedam dana u nedelji.
                        </p>
                    </div>
                </div>
            </div>
            
            
        </div>
    </section>

<div v-show="!mobile">
<div class="columns is-gapless is-multiline is-desktop" id="prvii">
  <div class="column is-half" >
  <div class="naslov">UŽIVAJTE U ZELENILU KOJE VAS OKRUŽUJE</div>
  <hr class="title-underline" style="background: blue;" />
  <div id="prvi-tekst" style="@media screen and(max-width: 800px) {
  font-size: 10px; color: black; 
  }">
    Korisnicima Doma na raspolaganju je komforno dvorište sa terasom, sa divnim
okruženjem koje krasi zelenilo. Dvorište je ograđeno I poseduje adekvatne staze I rampe
tako da je korisnicima obezbeđeno sigurno kretanja.
    
  </div>
  
  </div>
  <div class="column is-half">
    <img style="width: 600px;
  height: 450px;"
      src="../assets/VRF_0556-min.jpg">
  </div>
</div>



<div class="columns is-gapless is-multiline is-desktop" id="prvii">
  
  <div class="column is-half" > 
    <img style="width: 600px;
  height: 450px;"  src="../assets/VRF_0507-min.jpg" >
  </div>
 
  <div class="column is-half">
    <div class="naslov">UDOBAN I KOMFORAN SMEŠTAJ</div>
    <hr class="title-underline" style="background: blue;" />
    <div id="prvi-tekst">
       U ponudi su dvokrevetne, trokrevetne I četvorokrevetne sobe koje su planski odrađene
tako da se korisnik kroz nju besmetano kreće. Svaka od njih je opremljena klima
uredjajem, kvalitetnim nameštajem I SOS tasterima za pozivanje osoblja, takodje svaka
soba ima dovoljan dotok prirodne svetlosti.
    </div>
  
  </div>
</div>

<div class="columns is-gapless is-multiline is-desktop" id="prvii">
  <div class="column is-half" >
  <div class="naslov">PROSTORAN I TOPAO DNEVNI BORAVAK</div>
  <hr class="title-underline" style="background: blue;" />
  <div id="prvi-tekst" style="@media screen and(max-width: 800px) {
  font-size: 10px; color: black; 
  }">
    U sklopu našeg Doma nalazi se prostoran dnevni boravak I trepezarija koji poseduje svu
adekvatnu opremu I gde će naši korisnici provoditi svoje slobodno vreme predviđeno za
razonodu I relaksaciju. 
    
  </div>
  
  </div>
  <div class="column is-half">
    <img style="width: 600px;
  height: 450px;"
      src="../assets/VRF_0464-min.jpg">
  </div>
</div>
</div>

<div v-show="mobile">
  <div class="columns is-gapless is-multiline is-desktop" id="prvii">
  <div class="column is-half" >
  <div class="naslov">UŽIVAJTE U ZELENILU KOJE VAS OKRUŽUJE</div>
  <hr class="title-underline" style="background: blue;" />
  <div id="prvi-tekst" style="@media screen and(max-width: 800px) {
  font-size: 10px; color: black; 
  }">
    Korisnicima Doma na raspolaganju je komforno dvorište sa terasom, sa divnim
okruženjem koje krasi zelenilo. Dvorište je ograđeno I poseduje adekvatne staze I rampe
tako da je korisnicima obezbeđeno sigurno kretanja.
    
  </div>
  
  </div>
  <div class="column is-half">
    <img style="width: 600px;
  height: 350px;"
      src="../assets/VRF_0556-min.jpg">
  </div>
</div>



<div class="columns is-gapless is-multiline is-desktop" id="prvii">
  <div class="column is-half">
    <div class="naslov">UDOBAN I KOMFORAN SMEŠTAJ</div>
    <hr class="title-underline" style="background: blue;" />
    <div id="prvi-tekst">
        U ponudi su dvokrevetne, trokrevetne I četvorokrevetne sobe koje su planski odrađene
tako da se korisnik kroz nju besmetano kreće. Svaka od njih je opremljena klima
uredjajem, kvalitetnim nameštajem I SOS tasterima za pozivanje osoblja, takodje svaka
soba ima dovoljan dotok prirodne svetlosti.
    </div>
  
  </div>
  <div class="column is-half" > 
    <img style="width: 600px;
  height: 350px;"  src="../assets/VRF_0507-min.jpg" >
  </div>
 
  
</div>

<div class="columns is-gapless is-multiline is-desktop" id="prvii">
  <div class="column is-half" >
  <div class="naslov">PROSTORAN I TOPAO DNEVNI BORAVAK</div>
  <hr class="title-underline" style="background: blue;" />
  <div id="prvi-tekst" style="@media screen and(max-width: 800px) {
  font-size: 10px; color: black; 
  }">
    U sklopu našeg Doma nalazi se prostoran dnevni boravak I trepezarija koji poseduje svu
adekvatnu opremu I gde će naši korisnici provoditi svoje slobodno vreme predviđeno za
razonodu I relaksaciju. 
    
  </div>
  
  </div>
  <div class="column is-half">
    <img style="width: 600px;
  height: 320px;"
      src="../assets/VRF_0464-min.jpg">
  </div>
</div>
</div>


<div class="mapa">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5613.664231913402!2d19.73064744517446!3d45.29161412719782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b138aa73e54b5%3A0x7f4570a753510f09!2sStaracki%20dom%20KLISARIC%20DOM!5e0!3m2!1ssr!2srs!4v1638349930233!5m2!1ssr!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>



</div>
</template>

<script>
import image from '../assets/VRF_0549-min.jpg'
import image2 from '../assets/VRF_0531-min.jpg'
import image4 from '../assets/VRF_0479-min.jpg'
  export default {
    name: 'Home',
  data () {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,  
      interval: 5000,
      items: [
        {
          src: image,
          // text: "Pogledajte nasu galeriju",
          // button: 'Galerija'
        },
        {
          src: image2,
          // text: "AAA"
        },
        
        {
          src: image4,
          // text: "Galerija"
        },
      ],

    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
  },
  methods: {
    checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 800) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            return;
             
        },
  }
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

section {
    // padding: 3px 80px;
    text-align: center;
    color: black;
    font-size: 25px;
    // margin-bottom: 50%;
    
    
  }
.far {
  color: #243e87;
  margin-bottom: 4%;
}
.fas {
  color: #243e87;
  margin-bottom: 4%;
}
.title {
  font-size: 35px;
  color: #243e87;
  font-weight: bolder;

}


#prvi-tekst {
  font-size: 27px;
  margin-bottom: 5%;
  margin-left: 20%;
  margin-right: 20%;
  text-align: justify;
  
}
.naslov {
  margin-top: 6%;
  font-size: 36px;
  text-align: center;
  margin-bottom: -2%;
  font-weight: bold;
  color: black;
}
#prvii {
  margin: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
  color: #000;
}

@media screen and(max-width: 800px) {
  #prvi {
    font-size: 5px;
  } 
  #prvi-tekst {
  font-size: 20px;
  margin: 5%;
  }
  #naslov {
    font-size: 30px;
  }

  img {
    height: 200px;
    width: 2%;
  }
  section {
      margin-top: -85%;
  }
}
</style>