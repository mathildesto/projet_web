<template>
  <div class="gallery-options">
    <div class="search-bar">
      <img src="../assets/search-icon.png" alt="Search Icon" class="search-icon" />
      <input type="text" name="search" placeholder="Search for a character" v-model="search" @input="handleSearch" />
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
      this.$emit("search", ""); 
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
  top: 450px;
  left: 300px;
  font-family: 'Lucida Sans';
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-icon {
  width: 16px; 
  height: 16px; 
  position: absolute;
  top: 10px;
  left: 15px;
}

input[type="text"] {
  padding: 8px 500px 8px 36px; 
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 20px; 
  font-size: 14px;
}

button.filter-button {
  margin: 5px;
  padding: 3px 12px; 
  background-color: white; 
  border: none;
  border-radius: 20px; 
  cursor: pointer;
  font-size: 12px;
}
</style>
