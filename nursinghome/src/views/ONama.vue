<template>
  <div>
    <v-container>
    <v-row gutters>
      <v-col cols="12" sm="6" md="8" class="prvideo">
        <v-card>
          <h1 class="naslov">O NAMA</h1> <br> 
          <p class="tekst">Dom za stare <span class="bold">„Klisarić Dom“</span> je visoko kvalitetno opremljena institucija za negu i rad sa starim
osobama. Urađen je prema najvišim standardima za smeštaj odraslih i starih lica, preporučenim
od strane Ministarstva za rad i socijalnu politiku. </p> <br>
          <p class="tekst">Dom za stare <span class="bold">„Klisarić Dom“</span> nalazi se u Rumenki nedaleko od Novog Sada. Dom je smešten u
mirnoj ulici izolovanoj od saobraćaja i gradske buke, tako da se korisnicima omogućava
odgovarajući mir i relaksacija.</p> <br> <br>
          <p class="tekst">U sastavu našeg Doma nalazi se dvorište bogato zelenilom koje je predviđeno za odmor naših
korisnika I potpuno nov planski izgrađen starački dom, adekvatno uređen I opremljen da
zadovolji sve potrebe I zahteve korisnika.</p><br>
          <p class="tekst">Kapacitet našeg Doma je 18 kreveta ( dvokrevetne, trokrevetne I četvorokrevetne sobe). Svaka
soba je adekvatno opremljena tako da zadovolji sve potrebe našeg korisnika.</p><br>
          <p class="tekst">U sklopu našeg Doma nalazi se prostoran dnevni boravak sa trepezarijom gde će korisnici moći
da provode svoje slobodno vreme.</p><br>
          

        </v-card>
      
        
      </v-col>

      <v-col cols="6" md="4" id="contactcol">
        <v-card class="" id="contact">
          
          <section class="kontakt">
          <span><span class="bold">Poslovno ime: </span> Klisarić Dom D.O.O.</span> <br>
          <span><span class="bold">Telefon: </span> +381 64-328-98-37</span> <br>
          <span><span class="bold">Email: </span> klisaricdom@gmail.com</span> <br>
          <span><span class="bold">Adresa: </span> Srpskih dobrovoljaca 1912-1918, br. 46
            Rumenka, Novi Sad</span> <br>
          </section> <br> 
        <img class="slikakontakt" src="../assets/dvoriste-min.png">
          <ul class="ulkontakt">
            <li class="likontakt">u mirnom okruzenju</li>
            <li class="likontakt">250 m2 komfornog prostora</li>
            <li class="likontakt">6 luksuzno opremljenih soba</li>
            <li class="likontakt">stručno i opremljeno osoblje</li>
            <li class="likontakt">950 m2 ogradjenog dvorišta</li>
          </ul>
        <img class="slikakontakt" src="../assets/VRF_0527-min.jpg">
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>


  export default {
    name: 'ONama',
  
  
}
  
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
.slika {
  width: 100%;
  height: 10%;
}
/* lista */
li {
  margin: 0;
  padding: 10px;
  list-style: none;  
}
ul {
  list-style: none; /* Remove list bullets */
  padding: 0;
  margin: 0;
  text-indent: 40px;
  text-align: justify;
}
li {
  padding-left: 16px;
}
li:before {
  content: "•"; 
  padding-right: 8px;
}


/* TEKST */
.trpezarija {
  width: 600px;
  height: 400px;
  padding: 30px;
}

.v-card {
  font-size: 20px;
  border: none; 
}
.naslov {
  font-size: 45px;
  text-align: center;
}
.tekst {
  font-size: 27px;
  /* text-indent: 30px; */
  text-align: justify;
  letter-spacing: 1px;
  padding-left: 50px;
  padding-right: 50px;
  
}
.bold {
  font-weight: bold;
  color: black;
}
.tekstvreme {
  font-weight: bold;
  font-size: 27px;
  /* text-indent: 30px; */
  text-align: justify;
  letter-spacing: 1px;
  padding-left: 50px;
  padding-right: 50px;
  color: black;
}
.tekstvremee {
  font-size: 24px;
  padding-left: 50px;
  padding-right: 50px;
  color: black;
}

.tekstzahtev {
  font-size: 25px;
  text-align: justify;
  letter-spacing: 1px;
  padding-left: 50px;
  padding-right: 50px;
  font-weight: bold;
  color: black;
}


/* STRANA */
.slikakontakt {
  width: 90%;
  height: 60%;
  padding-bottom: 40px;
  padding-top: 20px;
}

.likontakt {
  padding-left: 5px;
  margin-left: -6%;
  color: black;
  text-align: justify;
  
}
.likontakt::before {
  content: "•"; 
  /* padding-right: 8px; */
}
#contact, #contactcol { 
  font-size: 20px;
  padding: 40px; 
}
#contactcol {
  background-color: white;
  margin-top: 10px;
}
#contact {
  background-color:rgb(235, 221, 221);
}
.kontakt {
  padding-bottom: 15px;
  margin-left: 10%;
}

img {
  width: 100px;
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
}

@media screen and (max-width: 800px) {
/* SA STRANE */
#contactcol {
  margin: auto;
  display: block;
  padding: 0px;
}
#contact {
  padding: 10px;
  
  
}
.kontakt {
  padding-bottom: 0px;
  margin-left: 1%;
}

ul {
  font-size: 13px;
  text-align-last: start;
  text-indent: 10px;
  
}
.likontakt {
  /* margin-left: 5%; */
  /* text-align: left; */
  padding-top: -10px;
  text-align: center;
}
.tekstvreme {
  font-weight: bold;
  font-size: 20px;
  /* text-indent: 30px; */
  text-align: justify;
  letter-spacing: 1px;
  padding-left: 50px;
  padding-right: 50px;
  color: black;
}
.tekstvremee {
  font-size: 17px;
  padding-left: 20px;
  padding-right: 30px;
  color: black;
}

  .tekstzahtev {
  font-size: 16px;
  text-align: justify;
  letter-spacing: 1px;
  padding-left: 50px;
  padding-right: 50px;
  font-weight: bold;
  color: black;
}

  .tekst {
    font-size: 17px;
  }
  .naslov {
    font-size: 30px;
  }
  .trpezarija {
    width: 500px;
    height: 250px;
  }
}
</style>