<template>
  <div class="gallery-options">
    <div class="search-bar">
      <img src="../assets/search-icon.png" alt="Search Icon" class="search-icon" />
      <input type="text" name="search" placeholder="Rechercher un personnage" v-model="search" @input="handleSearch" />
    </div>
    <button v-if="search" @click="cleanSearch" class="filter-button">X</button>
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

<style scoped>
.gallery-options {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  margin-bottom: 20px;
  position: absolute;
  top: 500px;
  left: 300px;
  font-family: 'Lucida Sans';
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-icon {
  width: 16px; /* Adjust the width of the search icon */
  height: 16px; /* Adjust the height of the search icon */
  position: absolute;
  top: 10px;
  left: 15px;
}

input[type="text"] {
  padding: 8px 500px 8px 36px; /* Adjust the padding to accommodate the search icon */
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 20px; /* Increase the border-radius to make the input more rounded */
  font-size: 14px;
}

button.filter-button {
  margin: 0;
  padding: 3px 12px; /* Increase the padding to make the button wider */
  background-color: white; /* Set the background color to white */
  border: none;
  border-radius: 20px; /* Increase the border-radius to make the button more rounded */
  cursor: pointer;
  font-size: 12px;
}
</style>
