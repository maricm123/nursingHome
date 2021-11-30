<template>
  <div>
    <Logo />
    <Navigation />
    <router-view />
    <Call />
    <Footer class="footer" />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Call from './components/Call'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
      Navigation, Footer, Logo, Call
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
* {
  font-family: 'Bebas Neue', cursive;
}

</style>
