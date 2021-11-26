<template>
  <div>
    <div class="columns is-gapless is-multiline is-desktop" id="prvi">
  
  <div class="column is-half" > 
    <h1>Pronadjite nas putem mape</h1>
    <hr class="title-underline" style="background: blue;" />
    <section>
    <span><i class="fa fa-map-marker"></i></span>
    <span>Street, full address, state/province, country, pincode</span>
  </section>
  <section>
    <span><i class="fa fa-phone"></i></span>
    <span>(00) 0000 0000</span>
  </section>
  <section>
    <span><i class="fa fa-envelope"></i></span>
    <span>info@websitename.com</span>
  </section>
  </div>
 
  <div class="column is-half">
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1403.4272640108168!2d19.72727859065993!3d45.29116126205282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b138aa73e54b5%3A0x7f4570a753510f09!2sStaracki%20dom%20KLISARIC%20DOM!5e0!3m2!1ssr!2srs!4v1637850962343!5m2!1ssr!2srs" width="600" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  
  </div>
</div>

  </div>
</template>

<script>


  export default {
    name: 'ONama',
  
  
}
  
</script>

<style scoped>

@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

h1 {
  font-size: 25px;
  font-weight: 300;
}

section {
  font-size: 30px;
  padding: 20px;
}

@media screen and (max-width: 800px) {

  iframe {
    width: 100%;
  }
  
}
</style>