<template>
  <div>
    <HeaderGot></HeaderGot>
    <IntroGot></IntroGot>
    <GotGallery></GotGallery>
    <FooterGot></FooterGot>
  </div>
</template>

<script>
import HeaderGot from './components/Header.vue'
import IntroGot from './components/Intro.vue'
import FooterGot from './components/footer.vue'
import GotGallery from './components/GotGallery.vue'

export default {
  name: "App",

  components: {
    HeaderGot,
    IntroGot,
    FooterGot,
    GotGallery,
  },

}

</script>

