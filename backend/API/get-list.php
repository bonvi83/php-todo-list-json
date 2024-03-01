<!-- creo un API di lettura e con questo php riesco a leggere il file json -->

<?php

$json_list_content = file_get_contents(`todolist.json`);


// con header il browser capisce che c'è un file json

header (`Content-Type: applicatione/json`);