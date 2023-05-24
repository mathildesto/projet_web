<template>
  <div class="intro">
    <div class="header-overlay">
      <HeaderGot />
    </div>
    <h1>Game of Thrones character gallery</h1>
    <p>Welcome to our Game of Thrones character gallery! This epic television series is renowned for its political intrigues, epic battles, and wide array of memorable characters. Here, we have gathered a collection of some of the most iconic figures from the series, from Jon Snow to Daenerys Targaryen to Tyrion Lannister. Discover the portraits, biographies, and key moments of each character, and immerse yourself in the world of Westeros.</p>  </div>
</template>

<script>
import HeaderGot from './Header.vue';

export default {
  name: "IntroGot",
  components: {
    HeaderGot,
  },
};
</script>

<style scoped>
.intro {
  background-image: url("~@/assets/intro.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  position: relative;
  font-family: 'Lucida Sans';
  color: rgba(255, 255, 255, 0.812);
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; /* Set a higher z-index to ensure the header is on top */
}

.intro h1 {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  display: block;
}

.intro p {
  position: absolute;
  top: 45%;
  margin-left: 140px;
  margin-right: 140px;
  font-size: 19px;
  line-height: 1.8;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  display: block;
}
</style>
