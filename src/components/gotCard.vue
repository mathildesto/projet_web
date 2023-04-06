<template>
  <div id="got-card">
    <img id="got-img" v-bind:src="imageUrl"/>
    <div>
      <h2>{{fullName}}</h2>
      <p>{{family}}</p>
    </div>  
  </div>
</template>


<script>
export default {
  name: 'gotCard',
	props: {
		firstName: String,
    lastName : String,
    fullName : String,
    title : String,
		family: String, 
		imageUrl: {type: String, default:"https://my-best-kennel.com/pictures/default.png"}
	}
};
</script>


<style scoped>
#got-card {
  padding: 20px;
  width: 300px;
  border: solid #ddd 1px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

#got-card:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

#got-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

#got-card > div {
  padding: 20px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  text-align: center;
}

#got-card h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

#got-card p {
  margin: 0;
  font-size: 1rem;
  color: #888;
  margin-top: 10px;
}
</style>















<!-- 1/ chemin qui sert à aller chercher module 'blablabl'

chemin relatif ./blabla/

chemin absolu @/component/componentname.vue il va direct se positionnner dans le dossier source  -->
