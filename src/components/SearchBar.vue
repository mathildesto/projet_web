<template>
    <div class="gallery-options">
      <input type="text" name="search" placeholder="Chercher un personnage" v-model="search" @input="handleSearch" />
      <button v-if="search" @click="cleanSearch">X</button>
      <label for="perso-sort">Trier par :</label>
      <select v-model="sortType" id="perso-sort" @change="handleSort">
        <option value="AZName">Noms de A à Z</option>
        <option value="ZAName">Noms de Z à A</option>
        <option value="AZHouse">Maison de A à Z</option>
        <option value="ZAHouse">Maison de Z à A</option>
      </select>
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
        sortType: "AZName",
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
      handleSort() {
        this.$emit("sort", this.sortType);
      },
    },
  };
  </script>