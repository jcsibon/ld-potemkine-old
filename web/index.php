<?php

require('../vendor/autoload.php');

$app = new Silex\Application();
$app['debug'] = true;

$app->register(new Silex\Provider\MonologServiceProvider(), array(
  'monolog.logfile' => 'php://stderr',
));

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));

$app->get('/', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('index.twig');
});

$app->get('/catalog', function() use($app) {

  $file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1971894571&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
  $keys = array_shift($file);
  foreach ($file as $i=>$row) {
      foreach(array_combine($keys, $row) as $data) {
        $cata[$data['universeUrlname']]=$data;
      }
  }

  $file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1183165030&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
  $keys = array_shift($file);
  foreach ($file as $i=>$row) {
      foreach(array_combine($keys, $row) as $data) {
        $catalog[]=$data;
        //$catalog[$data['subuniverseUrlname']]=$data;
        // $catalog[$row['universeUrlname']]['subuniverses'][$row['subuniverseUrlname']]=$row;
      }
  }


  /*
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
  */




  header('Content-type: application/json');
  die(json_encode($catalog, true));
  return true;
});

$app->run();