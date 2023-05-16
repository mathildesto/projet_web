<template>
    <div class="gallery-options">
      <input type="text" name="search" placeholder="Chercher un personnage" v-model="search" @input="handleSearch" />
      <button v-if="search" @click="cleanSearch">X</button>
      </div>
  </template>
  
  <script>
  export default {
    name: "SearchBar",
    props: {
      value: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        search: this.value,
      };
    },
    methods: {
      handleSearch() {
        this.$emit("search", this.search);
      },
      cleanSearch() {
        this.search = "";
        this.$emit("search", ""); // Emit empty string to clear the search
      },
    },
  };
  </script>