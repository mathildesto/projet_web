
<template>
    <div class="footer">
        <footer>
            <p>Game of Thrones est une marque déposée de HBO, Inc. Ce projet est uniquement à but non lucratif et pour la pratique du développement web.</p>
        </footer>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "FooterGot"
  };
  </script>
  
  
  <style scoped>
  html, body {
      height: 100%;
      margin: 0;
      padding: 0;
  }

  .footer {
      background-color: #f9f9f9;
      color: #333;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      position: relative;
      bottom: 0;
      width: 100%;
      height: 20px;
      margin-top: auto;
  }

  .footer p {
      margin: 0;
  }
</style>