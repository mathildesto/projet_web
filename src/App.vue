<template>
  <div>
    <HeaderGot></HeaderGot>
    <GotGallery></GotGallery>
    <FooterGot></FooterGot>
  </div>
</template>

<script>
import HeaderGot from './components/header.vue'
import FooterGot from './components/footer.vue'
import GotGallery from './components/GotGallery.vue'

export default {
  name: "App",

  components: {
    HeaderGot,
    FooterGot,
    GotGallery,
  },

}

</script>

