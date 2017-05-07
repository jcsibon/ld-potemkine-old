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
  $app['catalog'][$universe['universeUrlname']]=$universe;

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



$app->get('/{universeUrlName}-CCU0000/', function($universeUrlName) use($app) {

  // Génération des Univers
  $handle = fopen('https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1971894571&single=true&output=csv', "r");
  if(empty($handle) === false) {
      while(($row = fgetcsv($handle, 1000, ",")) !== FALSE){
          $data[] = $row[0] . "," . $row[1] . "," . $row[2] . "," . $row[3] . "," . $row[4] . "," . $row[5] . ";";
      }
      fclose($handle);
  }

  // Génération des Sous-univers
  $handle = fopen('https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1121908549&single=true&output=csv', "r");
  if(empty($handle) === false) {
      while(($row = fgetcsv($handle, 1000, ",")) !== FALSE){
          $data[] = $row[0] . "," . $row[1] . "," . $row[2] . "," . $row[3] . "," . $row[4] . "," . $row[5] . ";";
      }
      fclose($handle);
  }

  // Génération des Familles
  $handle = fopen('https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1183165030&single=true&output=csv', "r");
  if(empty($handle) === false) {
      while(($row = fgetcsv($handle, 1000, ",")) !== FALSE){
          $data[] = $row[0] . "," . $row[1] . "," . $row[2] . "," . $row[3] . "," . $row[4] . "," . $row[5] . ";";
      }
      fclose($handle);
  }




  // Génération des Sous-familles
  $subfamilies = array();
  $file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1976579302&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
  $keys = array_shift($file);
  foreach ($file as $i=>$row) {
      $subfamilies[$row[0]][] = array_combine($keys, $row);
  }

  $families = array();
  $file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1183165030&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
  $keys = array_shift($file);
  foreach ($file as $i=>$row) {
      $families[$row[0]][] = array_combine($keys, $row);
  }


  $subuniverses = array();
  $file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1121908549&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
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




  $catalog = $universes;
  // header('Content-type: application/json');
  // die(json_encode( $catalog ));

  $app["twig"]->addGlobal("catalog", $catalog);
  $app["twig"]->addGlobal("subfamilies", $subfamilies);
  return $app['twig']->render('universe.twig');
})->assert('universeUrlName', '[a-z\-]+');

$app->get('/{universeUrlName}-CCU0000/{familyUrlName}-CCN0000/', function($universeUrlName, $familyUrlName) use($app) {






  return $app['twig']->render('family.twig');
})->assert('universeUrlName', '[a-z\-]+')->assert('familyUrlName', '[a-z\-]+');

$app->get('/{universeUrlName}-CCU0000/{familyUrlName}-CCN0000/{subfamilyUrlName}-CCN0000', function($universeUrlName, $familyUrlName, $subfamilyUrlName) use($app) {





  return $app['twig']->render('family.twig');
})->assert('universeUrlName', '[a-z\-]+')->assert('familyUrlName', '[a-z\-]+')->assert('subfamilyUrlName', '[a-z\-]+');

$app->get('product-FPC{productId}', function($productId) use($app) {






  return $app['twig']->render('product.twig');
});

$app->get('article-{articleId}', function($articleId) use($app) {






  return $app['twig']->render('article.twig');
});

$app->get('/fenetres-CCU0000/fenetres-{familyUrlname}-CCN0000/', function($familyUrlname) use($app) {

  return $app['twig']->render('windows.twig');
})->assert('familyUrlname', '/pvc|pin|chene/');

$app->get('/configurateur', function() use($app) {
  return $app['twig']->render('configurateur.twig');
});

$app->run();