<?php

require('../vendor/autoload.php');

$app = new Silex\Application();
$app['debug'] = true;

error_reporting(E_ALL);

// Génération des Sous-familles
$subfamilies = array();
$file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1976579302&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
$keys = array_shift($file);
foreach ($file as $i=>$row) {
    $subfamilies[] = array_combine($keys, $row);
}

$families = array();
$file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1183165030&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
$keys = array_shift($file);
foreach ($file as $i=>$row) {
    $families[] = array_combine($keys, $row);
}

$subuniverses = array();
$file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1183165030&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
$keys = array_shift($file);
foreach ($file as $i=>$row) {
    $subuniverses[] = array_combine($keys, $row);
}

$universes = array();
$file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1971894571&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
$keys = array_shift($file);
foreach ($file as $i=>$row) {
    $universes[] = array_combine($keys, $row);
}



foreach($universes as $universe)
  die(json_encode( $universe, true ));

  $app['catalog'][$universeUrlname]]=$universe;

  header('Content-type: application/json');
  die(json_encode( $app['catalog'], true ));

foreach($subuniverses as $subuniverse)
  $app['catalog'][$subuniverse['universeUrlname']]['subuniverses'][$subuniverse['subuniverseUrlname']]=$subuniverse;


// Register the monolog logging service
$app->register(new Silex\Provider\MonologServiceProvider(), array(
  'monolog.logfile' => 'php://stderr',
));

// Register view rendering
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));

// Our web handlers

$app->get('/', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('index.twig');
});


$app->get('/catalog', function() use($app) {

  header('Content-type: application/json');
  die(json_encode( $app['catalog'], true ));
});


$app->run();