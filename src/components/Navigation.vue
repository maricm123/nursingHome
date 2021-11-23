<template>
<div>
<div id="app">
<section class="hero is-fullheight is-bold">
  <div class="hero-head">
    <nav class="navbar is-transparent">    
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
          </div>
        
     
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar">
          <a class="navbar-item" href="">
            Početna
          </a>
          <a class="navbar-item" href="/">
            O nama
          </a>
          <a class="navbar-item" href="/">
            Usluge
          </a>
          <a class="navbar-item" href="/">
            Ishrana
          </a>
          <a class="navbar-item" href="/">
            Galerija
          </a>
          <a class="navbar-item" href="/">
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  </div>
  
</section>
</div>
</div>
</template>


<script>

export default {
  name: "Navigation",
  
  data() {
    return {
      showNav: false
    }
  }
}
</script>


<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

body {
  margin: 0;
}

.navbar {
  overflow: hidden;
  background-color: #363841;
  text-align: center;
  z-index: 6;
  padding-left: 18%;
}
nav {
  position: fixed;
  top: 0;
  border: 1px solid rgb(220, 201, 201);
  text-align: center;
}


nav a {
  display: inline-block;
}

@media screen and (max-width: 992px) {
  nav {
    position: sticky;

  }
  .navbar {
    padding: 0;
    text-align: start;
    padding-left: 1%;
}

}
</style>