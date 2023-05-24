<template>    
  <SearchBar v-model="search" @search="handleSearch" />
  <FilterBar @sort="handleSort" />

  <div class="got-gallery">
    <div class="gallery">
      <div class="card" v-for="character in filteredGotData" :key="character.id">
        <gotCard
          :firstName="character.firstName"
          :lastName="character.lastName"
          :fullName="character.fullName"
          :title="character.title"
          :family="character.family"
          :imageUrl="character.imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gotCard from './gotCard.vue'
import { getGotData } from "@/services/gotAPI.js"
import SearchBar from './SearchBar.vue'
import FilterBar from './FilterBar.vue'

export default {
  name: "GotGallery",

  data() {
    return {
      gotData: [],
      search: "",
      persoSortType: "AZName",
    }
  },

  created() {
    this.retrieveGotData()
  },

  computed: {
    filteredGotData() {
      let filteredData = this.gotData
      if (this.search) {
        filteredData = filteredData.filter((character) => {
          return (
            character.fullName.toLowerCase().includes(this.search.toLowerCase()) ||
            character.title.toLowerCase().includes(this.search.toLowerCase())
          )
        })
      }
      if (this.persoSortType === "AZName") {
        filteredData.sort((a, b) => a.fullName.localeCompare(b.fullName))
      } else if (this.persoSortType === "ZAName") {
        filteredData.sort((a, b) => b.fullName.localeCompare(a.fullName))
      } else if (this.persoSortType === "AZHouse") {
        filteredData.sort((a, b) => a.family.localeCompare(b.family))
      } else if (this.persoSortType === "ZAHouse") {
        filteredData.sort((a, b) => b.family.localeCompare(a.family))
      }
      return filteredData
    },
  },

  methods: {
    async retrieveGotData() {
      this.gotData = await getGotData()
    },
    handleSearch(search) {
      this.search = search
    },
    handleSort(sortType) {
      this.persoSortType = sortType
    },
  },

  components: {
    gotCard,
    SearchBar,
    FilterBar, // Include the FilterBar component here
  },
}
</script>
  
  <style>
  
  .got-gallery {
      max-width: 1200px;
      margin: 20px auto;
      font-family: 'Lucida Sans';
      color: #333;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  
  .gallery-options {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  input[type="text"] {
    padding: 5px;
    padding-left: 30%;
    padding-right: 30%;
    margin: 3%;
    /* border: none; */
    border-radius: 4px;
    margin-right: 20px;
    font-size: 16px;
  }
  
  .gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 -10px;
      align-self: center;
  }
  
  .card {
    margin-bottom: 20px;
  max-width: 300px;
  flex-basis: 30%;
  margin: 0 20px;
  }
  
  @media (min-width: 768px) {
    .gallery {
      justify-content: space-around;
      margin: 0 -38px;
    }
  }
  </style>
  