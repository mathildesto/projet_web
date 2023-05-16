<template>
    <div class="gallery-options">
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
    name: "FilterBar",

    data() {
      return {
        sortType: "AZName",
      };
    },
    methods: {
      handleSort() {
        this.$emit("sort", this.sortType);
      },
    },
  };
  </script>