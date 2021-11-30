<template>
<div>
  <img class="slika" src="../assets/slika-min.jpg">
  <v-container>
    <v-row gutters>
      <v-col cols="12" sm="6" md="8" class="prvideo">
        <v-card>
          <h1 class="naslov">Naslov</h1> <br> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod illo fugit natus cum, hic ad doloribus, inventore dolore beatae accusantium. Sint ratione soluta culpa atque at, esse aut natus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit animi, rem optio non voluptas quidem fuga illum quo culpa, id corrupti debitis officiis repellat? Exercitationem rem officiis id laboriosam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam repellat aliquid praesentium porro natus beatae impedit, aspernatur distinctio fuga? Facilis quaerat exercitationem saepe tempora culpa consectetur quam explicabo non.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aperiam quidem quasi, doloribus accusamus ad repellendus blanditiis hic error deleniti sint excepturi sit quae odit architecto quibusdam rerum vero. Ipsam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, eaque veniam distinctio, esse et non repellat iste consectetur quo assumenda veritatis, velit est? Delectus provident enim error maiores quibusdam voluptas!
        </v-card>
      
        
      </v-col>

      <v-col cols="6" md="4" id="contactcol">
        <v-card class="pa-2" id="contact">
          <span class="kontakt">Kontakt</span><br> <br>
          <section>
          <span><i class="fa fa-map-marker"></i></span>
          <span>Street, full address, state/province, country</span>
          </section> <br> 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit officia, et commodi quam, aliquam illum numquam ut maiores ipsa incidunt quaerat magnam accusantium vitae optio dolorum harum quas repellat voluptatem.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde distinctio laborum laboriosam placeat est tempore accusantium aperiam, eius eaque accusamus dignissimos doloribus dolorem perspiciatis corrupti dolorum quod? Delectus, dignissimos beatae!
        <img src="../assets/VRF_0502.jpg">
        <img src="../assets/VRF_0502.jpg">
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>


<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
span {
    padding: 5%;
}

.slika {
  width: 100%;
  height: 10%;
}



.v-card {
  font-size: 20px;
  border: none; 
}
.naslov {
  font-size: 35px;
}

#contact, #contactcol {
  background: rgb(228, 225, 225);
  font-size: 20px;
  padding: 40px;
  
}
.kontakt {
  text-align: center;
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
  #contactcol {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    padding: 10px;

  }


  
}
</style>