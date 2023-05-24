<template>
  <div>
    <IntroGot></IntroGot>
    <GotGallery></GotGallery>
    <FooterGot></FooterGot>
  </div>
</template>

<script>
import IntroGot from './components/Intro.vue'
import GotGallery from './components/GotGallery.vue'
import FooterGot from './components/Footer.vue'

export default {
  name: "App",

  components: {
    IntroGot,
    FooterGot,
    GotGallery,
  },

}

</script>

