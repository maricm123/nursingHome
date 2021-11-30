<template>
<div id="app">
  <div class="">
    <div
      v-for="(src, index) in imgs"
      :key="index"
      class="pic"
      @click="() => showImg(index)"
      
    >
      <img :src="src">
    </div>
  </div>
  <vue-easy-lightbox
    class="slika"
    :visible="visible"
    moveDisabled="True"
    :imgs="imgs"
    @hide="handleHide"
  ></vue-easy-lightbox>
</div>
  
</template>

<script>
import vueEasyLightbox from 'vue-easy-lightbox'
import image1 from '../assets/VRF_0499.jpg';
import image2 from '../assets/VRF_0508.jpg';
import image3 from '../assets/VRF_0505.jpg';
import image4 from '../assets/VRF_0502.jpg';
import image5 from '../assets/VRF_0507.jpg';
import image6 from '../assets/VRF_0500.jpg';
import image7 from '../assets/VRF_0499.jpg';
export default {
    components: {
      vueEasyLightbox
    },
    data() {
      return {
      visible: false,
        imgs:  [
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          image7
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