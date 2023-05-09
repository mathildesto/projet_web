<template>
    <div class="intro">
    <h1>Connaissez-vous les personnages ?</h1>
    <p>Bienvenue dans notre galerie de personnages de Game of Thrones ! Cette série télévisée épique est célèbre pour ses intrigues 
      politiques, ses batailles épiques et son vaste éventail de personnages mémorables. Nous avons rassemblé ici une collection de 
      certaines des figures les plus emblématiques de la série, de Jon Snow à Daenerys Targaryen en passant par Tyrion Lannister. 
      Découvrez les portraits, les biographies et les moments clés de chaque personnage, et plongez dans l'univers de Westeros</p>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "HeaderGot"
  };
  </script>
  
  
  <style scoped>
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
  </style>