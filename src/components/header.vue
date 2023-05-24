<template>
    <div class="header">
      <header class="transparent-header">
        <img src="../assets/Logo_Game_of_Thrones.png" alt="Game of Thrones Logo" class="logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeaderGot",
  };
  </script>
  
  <style scoped>
  .header {
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999; 
  }
  
  .transparent-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 0.83);
    font-family: 'Lucida Sans';
    transition: background-color 0.3s ease;
    background-color: transparent; 
    padding: 15px;
  }
  
  .logo {
    height: 50px;
  }
  
  h1 {
    font-size: 18px;
    margin: 0;
  }
  
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  nav ul li {
    margin-right: 30px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.627);
    font-size: 16px;
    transition: color 0.3s ease;
  }
  
  nav ul li a:hover {
    color: #f2f2f2;
  }
  </style>
  