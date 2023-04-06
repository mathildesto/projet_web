<template>
      <div class="intro">
    <h1>Connaissez-vous les personnages ?</h1>
    <p>Bienvenue dans notre galerie de personnages de Game of Thrones ! Cette série télévisée épique est célèbre pour ses intrigues 
      politiques, ses batailles épiques et son vaste éventail de personnages mémorables. Nous avons rassemblé ici une collection de 
      certaines des figures les plus emblématiques de la série, de Jon Snow à Daenerys Targaryen en passant par Tyrion Lannister. 
      Découvrez les portraits, les biographies et les moments clés de chaque personnage, et plongez dans l'univers de Westeros</p>
    </div>
  <div class="got-gallery">
    <div class="gallery-options">
      <input type="text" name="search" placeholder="Chercher un personnage" v-model="search" />
      <label for="dog-sort">Trier par :  </label>
      <select v-model="persoSortType" id="perso-sort">
        <option value="AZName">Noms de A à Z</option>
        <option value="ZAName">Noms de Z à A</option>
        <option value="AZHouse">Maison de A à Z</option>
        <option value="ZAHouse">Maison de Z à A</option>
      </select>
    </div> 
    <div class="gallery">
      <div class="card" v-for="character in filteredGotData" :key="character.id">
        <gotCard :firstName="character.firstName" 
                 :lastName="character.lastName"
                 :fullName="character.fullName"
                 :title="character.title"
                 :family="character.family" 
                 :imageUrl="character.imageUrl"/>
      </div>
    </div>
  </div>
</template>

<script>
import gotCard from './components/gotCard.vue'
import {getGotData} from "@/services/gotAPI.js"

export default {
  name: "App",
  components: {
    gotCard,
  },
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
  },
}
</script>

<style>
.intro {
  background-image: url('https://wallpapercave.com/wp/wp2577505.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px; /* Hauteur du conteneur */
  position: relative; /* Positionnement relatif pour les éléments enfants */
  font-family: Arial, sans-serif;
  color: #f4f4f3;
}

.intro h1 {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  display: block; /* Affiche l'élément en tant que bloc */
}

.intro p {
  position: absolute;
  top: 50%;
  margin-left: 140px;
  margin-right: 140px;
  font-size: 19px;
  line-height: 1.5;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  display: block; /* Affiche l'élément en tant que bloc */


}


.got-gallery {
    max-width: 1200px;
    margin: 30px auto;
    font-family: Arial, sans-serif;
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
  width: 20px;
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
