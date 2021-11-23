<template>
<div>
    <nav>
        <div class="hamburger" id="hamburger" @click="hamburgerToggle">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <li><router-link  to="/">Početna</router-link></li>
            <li><router-link  :to="{ name: 'Onama' }">O nama</router-link></li>
            <li><router-link  :to="{ name: 'Usluge' }">Usluge</router-link></li>
            <li><router-link  :to="{ name: 'Ishrana' }">Ishrana</router-link></li>
            <li><router-link  :to="{ name: 'Galerija' }">Galerija</router-link></li>
            <li><router-link  :to="{ name: 'Kontakt' }">Kontakt</router-link></li>         
        </ul>
    </nav>
</div>
</template>


<script>
export default {

  name: "Navigation",
  methods: {
      hamburgerToggle() {
        var hamburger = document.getElementById("hamburger");
        var navLinks = document.querySelector(".nav-links");
        var links = document.querySelectorAll(".nav-links li");

        hamburger.addEventListener('click', ()=>{
        //Animate Links
            navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade");
            });

            //Hamburger Animation
            hamburger.classList.toggle("toggle");
        });
            
      }
  }
}
</script>


<style>
*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-weight: 300;
}
body{
    overflow-x: hidden;
    
}
nav{
    height: 6rem;
    width: 100vw;
    background-color: #f3f3f3;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    
    z-index: 10;
    justify-content: center;
    
}


/*Styling Links*/
.nav-links{
    display: flex;
    list-style: none; 
    width: 70vw;
    font-size: 27px;
    padding: 0 0.9vw;
    justify-content: space-evenly;
    align-items: center;
    color: black;
    font-weight: 100;
    
}
.nav-links li a{
    text-decoration: none;
    margin: 0 0.7vw;
}
.nav-links li a:hover {
    color: rgb(251, 251, 251);
}





/*Styling Hamburger Icon*/
.hamburger div{
    width: 40px;
    height:3px;
    background: #000000;
    margin: 5px;
    transition: all 0.2s ease;
}
.hamburger{
    display: none;
}

/*Stying for small screens*/
@media screen and (max-width: 800px){
    nav{
        position: fixed;
        z-index: 3;
    }
    .hamburger{
        display:block;
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
        z-index: 2;
        transition: all 0.7s ease;
    }
    .nav-links{
        position: fixed;
        background: #ffffff;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(50px at 90% -20%);
        -webkit-clip-path: circle(50px at 90% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
    }
    .nav-links.open{
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
        pointer-events: all;
    }
    .nav-links li{
        opacity: 0;
    }
    .nav-links li:nth-child(1){
        transition: all 0.5s ease 0.2s;
    }
    .nav-links li:nth-child(2){
        transition: all 0.5s ease 0.4s;
    }
    .nav-links li:nth-child(3){
        transition: all 0.5s ease 0.6s;
    }
    .nav-links li:nth-child(4){
        transition: all 0.5s ease 0.7s;
    }
    .nav-links li:nth-child(5){
        transition: all 0.5s ease 0.8s;
    }
    .nav-links li:nth-child(6){
        transition: all 0.5s ease 0.9s;
        margin: 0;
    }
    .nav-links li:nth-child(7){
        transition: all 0.5s ease 1s;
        margin: 0;
    }
    li.fade{
        opacity: 1;
    }
}
/*Animating Hamburger Icon on Click*/
.toggle .line1{
    transform: rotate(-45deg) translate(-5px,6px);
}
.toggle .line2{
    transition: all 0.7s ease;
    width:0;
}
.toggle .line3{
    transform: rotate(45deg) translate(-5px,-6px);
}
</style>

