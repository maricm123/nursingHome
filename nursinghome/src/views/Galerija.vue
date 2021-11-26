<template>
<div>
    <div class="gallery">
        <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div>
    
</div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';
import image from '../assets/VRF_0496.jpg'
import image2 from '../assets/VRF_0498.jpg'
import image3 from '../assets/VRF_0499.jpg'
import image4 from '../assets/VRF_0501.jpg'
import image5 from '../assets/VRF_0502.jpg'
import image6 from '../assets/VRF_0505.jpg'
import image7 from '../assets/VRF_0507.jpg'
import image8 from '../assets/VRF_0508.jpg'
import image9 from '../assets/VRF_0494.jpg'
import Footer from '../components/Footer'
export default {
    name: "Galerija",
    components: {
    VueGallerySlideshow, Footer
  },
  data() {
      return {
    images: [
      image,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9
      
    ],
      
    index: null
  }
  }
}
</script>

<style scoped>


.image {
  margin: 4px;
  float: left;
  width: 280px;
  height: 300px;
  cursor: pointer;
  margin-top: 5%;
  margin-left: 5%;
  
}
.gallery {
  overflow: hidden;
}


@media screen and (max-width: 800px) {

  
  .image {
    width: 170px;
    height: 200px;
    margin-left: 27%;
  }
   
}

</style>