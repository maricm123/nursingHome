<template>
<div id="app">
  <div class="">
    <div
      v-for="(src, index) in imgs"
      :key="index.src"
      class="pic"
      @click="() => showImg(index)"
      
    >
      <img :src="src">
    </div>
  </div>
  <vue-easy-lightbox
    class="slika"
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
    moveDisabled = "true"
  ></vue-easy-lightbox>
</div>
  
</template>

<script>
import vueEasyLightbox from 'vue-easy-lightbox'
import soba from '../assets/VRF_0485-min.jpg';
import soba1 from '../assets/VRF_0487-min.jpg';
import soba2 from '../assets/VRF_0489-min.jpg';
import soba3 from '../assets/VRF_0490-min.jpg';
import soba4 from '../assets/VRF_0493-min.jpg';
import soba5 from '../assets/VRF_0494-min.jpg';
import soba6 from '../assets/VRF_0496-min.jpg';
import soba7 from '../assets/VRF_0498-min.jpg';
import soba8 from '../assets/VRF_0499-min.jpg';
import soba9 from '../assets/VRF_0500-min.jpg';
import soba10 from '../assets/VRF_0501-min.jpg';
import soba11 from '../assets/VRF_0502-min.jpg';
import soba12 from '../assets/VRF_0507-min.jpg';
import soba13 from '../assets/VRF_0508-min.jpg';
import soba14 from '../assets/VRF_0511-min.jpg';
import soba15 from '../assets/VRF_0513-min.jpg';
import soba16 from '../assets/VRF_0515-min.jpg';
import soba17 from '../assets/VRF_0505-min.jpg';

import kupatilo from '../assets/VRF_0517-min.jpg';
import kupatilo1 from '../assets/VRF_0518-min.jpg';
import kupatilo2 from '../assets/VRF_0520-min.jpg';
import kupatilo3 from '../assets/VRF_0522-min.jpg';
import kupatilo4 from '../assets/VRF_0524-min.jpg';

import dnevni from '../assets/VRF_0458-min.jpg';
import dnevni1 from '../assets/VRF_0459-min.jpg';
import dnevni2 from '../assets/VRF_0461-min.jpg';
import dnevni3 from '../assets/VRF_0464-min.jpg';
import dnevni4 from '../assets/VRF_0465-min.jpg';
import dnevni5 from '../assets/VRF_0469-min.jpg';
import dnevni6 from '../assets/VRF_0471-min.jpg';
import dnevni7 from '../assets/VRF_0473-min.jpg';
import dnevni8 from '../assets/VRF_0479-min.jpg';

import trpezarija from '../assets/VRF_0450-min.jpg';
import trpezarija1 from '../assets/VRF_0451-min.jpg';
import trpezarija2 from '../assets/VRF_0453-min.jpg';
import trpezarija3 from '../assets/VRF_0456-min.jpg';
import trpezarija4 from '../assets/VRF_0482-min.jpg';

import napolje from '../assets/VRF_0530-min.jpg';
import napolje1 from '../assets/VRF_0531-min.jpg';
import napolje2 from '../assets/VRF_0534-min.jpg';
import napolje3 from '../assets/VRF_0537-min.jpg';
import napolje4 from '../assets/VRF_0538-min.jpg';
import napolje5 from '../assets/VRF_0542-min.jpg';
import napolje6 from '../assets/VRF_0544-min.jpg';
import napolje7 from '../assets/VRF_0549-min.jpg';
import napolje8 from '../assets/VRF_0556-min.jpg';
import napolje9 from '../assets/VRF_0560-min.jpg';
import napolje10 from '../assets/VRF_0561-min.jpg';
import napolje11 from '../assets/VRF_0529-min.jpg';
import napolje12 from '../assets/VRF_0528-min.jpg';
import napolje13 from '../assets/VRF_0527-min.jpg';
import napolje14 from '../assets/VRF_0526-min.jpg';
export default {
    components: {
      vueEasyLightbox
    },
    data() {
      return {
      visible: false,
      index: 0,
        imgs:  [
          soba,
          soba1, 
          
          soba3 ,
          soba4 ,
          soba5 ,
          soba6 ,
          soba7 ,
          soba8 ,
          soba9 ,
          soba10,
          soba11,
          soba12,
          soba13,
          soba14,
          soba15,
          soba16,
          soba17,
          dnevni,
          dnevni1,
          dnevni2,
          dnevni3,
          dnevni4,
          dnevni5,
          dnevni6,
          dnevni7,
          dnevni8,
          trpezarija,
          trpezarija1,
          trpezarija2,
          trpezarija3,
          trpezarija4,
          napolje,
          napolje1,
          napolje2,
          napolje3,
          napolje4,
          napolje5,
          napolje6,
          napolje7,
          napolje8,
          napolje9, 
          napolje10,
          napolje11,
          napolje12,
          napolje13,
          napolje14,
          kupatilo,
          kupatilo1,
          kupatilo2,
          kupatilo3,
          kupatilo4
        ]
      }
    },
    methods: {
      showImg (index) {
        this.index = index
        this.visible = true
      },
      handleHide () {
        this.visible = false
      }
    }
  }

</script>

<style scoped>
 .pic {
   width:  19%;
   height: 290px;
  
   /* float: left; */
   margin: 3%;
   display: inline-block;
   overflow: hidden;
   cursor: pointer;
   overflow: hidden;
 }


 @media screen and (max-width: 800px) {
  
   .pic {
     display: flex;
     width: 40%;
     margin-left: 30%;
     height: 220px;
     overflow: hidden;
   }
 }
 
</style>