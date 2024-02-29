<?php
require_once "./functions.php";
?>



<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- CDN Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />

    <!-- CDN VueJS -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <!-- CDN Axios -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <!-- link CSS -->
    <link rel="stylesheet" href="style.css">

    <title>ToDo List</title>
  </head>

  <body>
  <div id="app">
      <h1>{{ title }}</h1>
  </div>

  
    <!-- link JS -->
    <script src="./main.js"></script>
  </body>
</html>
