<template>
  <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <Logo />
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Logo from './components/Logo'

export default {
    components: {
      Navigation, Footer, Logo
  },
}
</script>

<style lang="scss">


</style>
