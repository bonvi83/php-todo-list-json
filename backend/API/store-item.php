<?php

// devo leggere il contenuto del json
$json_todolist = file_get_contents("../data/todolist.json");


// trasformo la stringa in arrey PHP
$todolist_array = json_decode($json_todolist);
// var_dump($todolist_array);


$todolist_array[] = $_POST["item"];
// var_dump($todolist_array);


// trasformo i dati dell'arrey in una stringa json
$json_result = json_encode($todolist_array);


// i dati che stampiamo sono permanenti e vanno ad aggiungersi al file json
file_put_contents("../data/todolist.json", $json_result);


// avviso il browser che sto inviando file json
header ("Content-Type: application/json");


// stampo i dati da visualizzare
echo $json_result;