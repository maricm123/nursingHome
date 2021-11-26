<template>
<footer>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

<div class="top_header">
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
<span class="border-shape"></span>
  <div class="bottom_content">
    <section >
    <a href="#"><i style="color: black;" class="fab fa-facebook fa-3x "></i></a>
    <a href="#"><i style="color: black" class="fab fa-instagram fa-3x"></i></a>
    
    </section>
    <section class="navigation">
    <!-- <router-link style="color: black"   to="/">Početna</router-link>
    <router-link style="color: black" :to="{ name: 'Onama' }">O nama</router-link>
    <router-link style="color: black" :to="{ name: 'Usluge' }">Usluge</router-link>
    <router-link style="color: black" :to="{ name: 'Ishrana' }">Ishrana</router-link>
    <router-link style="color: black" :to="{ name: 'Galerija' }">Galerija</router-link>
    <router-link style="color: black" :to="{ name: 'Kontakt' }">Kontakt</router-link> -->
  </section>
</div>
<div class="copyright" style="font-size: 15px">
  Copyright © 2021 powered by <a style="color: black; text-decoration: underline " href="https://www.linkedin.com/in/mihailo-maric/" target="_blank">Maric </a> 
</div>
</footer>
</template>

<style scoped>
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body{
  margin:0;
  overflow-x:hidden !important;
  box-sizing:border-box;
  font-family: 'Source Sans Pro', sans-serif;
}


a{
  text-decoration:none;
  outline:none !important;
  color:black
}

.border-shape {
  background: blue none repeat scroll 0 0;
  color: rgb(3, 3, 3);
  display: block;
  height: 3px;
  left: 0;
  margin: 20px auto;
  position: relative;
  right: 0;
  text-align: center;
  top: 0;
  width: 80px;
}

.border-shape::before {
  background: blue   none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 1px;
  left: 80px;
  margin: 0 auto;
  position: absolute;
  text-align: center;
  top: 1px;
  width: 100px;
}

.border-shape::after {
  background: blue none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 1px;
  margin: 0 auto;
  position: absolute;
  right: 80px;
  text-align: center;
  top: 1px;
  width: 100px;
}


/*FOOTER*/
footer{
    width:100%;
    background-color: #f3f3f3;
    color:black;
  
}

.top_header{
  padding:2rem;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
}

.top_header section{
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
}

.top_header span{
padding:0 1rem;
}

.top_header .fa{
  color:blue;
  font-size:35px;
  }

footer .border-shape {
  width: 40%;
}

footer .border-shape::before {
  width: 100%;
  left:120px;
}

footer .border-shape::after {
  width: 100%;
  right:120px;
}

footer .bottom_content section{
  padding:1.5rem 2rem;
  display:flex;
  align-items:center;
  justify-content:Center;
 
}

.bottom_content a{
  margin:0 20px;
  color:rgba(255,255,255,0.7);
  transition:0.5s;
}

.bottom_content a:hover{
  color:rgba(255,255,255,1);
}


.copyright{
  padding:0.8em 0;
  background-color:#e7d0d0;
  text-align:center;
  color:rgb(0, 0, 0);
  font-size:12px;
  margin-bottom: -5%;
}



@media screen and (max-width:820px){
.navigation {
  display: none;
}
.top_header{
  padding:1rem;
  display:block;
}


.top_header section{
  margin:40px 0;
  align-items:left;
  justify-content:left;
}
footer .bottom_content section{
  padding:1rem;
  display:block;
  margin-left: 20px;
  
  }
footer .bottom_content section a{
  padding:1rem;
  font-size:12px;
  margin:0 5px;
  display: inline-block;
}
}



</style>