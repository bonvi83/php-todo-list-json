<?php
// creo un API di lettura e con questo php riesco a leggere il file json


// prendo il contenuto del file todolist.json sotto forma di stringa
$json_list_content = file_get_contents("../data/todolist.json");


// trasformo la stringa in arrey PHP
$todo_array = json_decode($json_list_content);
// var_dump($todo_array);


// applico i filtri e raffino i dati
// $todo_array = array_filter($todo_array, fn ($item) => !empty ($item));
// var_dump($todo_array);


// trasformo i dati raffinati in una stringa json
$todo_json = json_encode($todo_array);


// con header il browser capisce che riceverà un file json (e non lo legge come un semplice codice html)
header ("Content-Type: applicatione/json");


// stampo i dati da visualizzare
echo $todo_json;