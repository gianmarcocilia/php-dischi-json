<?php
$string = file_get_contents('dischi.json');

$list = json_decode($string, true);


//
if (isset($_GET['index'])) {
    foreach ($list as $key => $film) {
        if ($_GET['index'] == $key) {
            $json_film = json_encode($film);
            header("Content-Type: application/json");
            echo $json_film;
            die;
        }
    }
}


$json = json_encode($list);

header("Content-Type: application/json");
echo $json;
