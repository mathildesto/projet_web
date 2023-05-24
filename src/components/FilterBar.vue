<template>
  <div class="gallery-options">
    <label for="perso-sort" class="filter-label">Filtrer :</label>
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

<style scoped>
.gallery-options {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Lucida Sans';
  position: absolute;
  top: 443px;
  left: 1050px;
}

select {
  padding: 5px;
  font-size: 14px;
  margin-right: 10px;
}

select:hover {
  background-color: #f2f2f2;
}

label.filter-label {
  margin-right: 10px;
  color: white; 
}
</style>
