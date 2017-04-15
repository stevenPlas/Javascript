<?php
$WeatherSource = "https://api.forecast.io/forecast/4a3764069dbc3a70e3519c2d4d5417f1/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>
