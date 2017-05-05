<?php

require('../vendor/autoload.php');

$app = new Silex\Application();
$app['debug'] = true;

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

$app->get('/{universeName}-CCU{universeId}/', function($universeName, $universeId) use($app) {

  $handle = fopen('https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=0&single=true&output=csv', "r");
  if(empty($handle) === false) {
      while(($row = fgetcsv($handle, 1000, ",")) !== FALSE){
          $data[] = $row[0] . "," . $row[1] . "," . $row[2] . "," . $row[3] . "," . $row[4] . "," . $row[5] . ";";
      }
      fclose($handle);
  }
  
  $app["twig"]->addGlobal("data", $data);
  return $app['twig']->render('universe.twig');
});

$app->get('/{universeName}-CCU{universeId}/{familyName}-CCN{familyId}/', function($familyId) use($app) {






  return $app['twig']->render('family.twig');
});

$app->get('/{universeName}-CCU{universeId}/{familyName}-CCN{familyId}/{subfamilyName}-CCN{subfamilyId}', function($subfamilyId) use($app) {






  return $app['twig']->render('family.twig');
});

$app->get('product-FPC{productId}', function($productId) use($app) {






  return $app['twig']->render('product.twig');
});

$app->get('article-{articleId}', function($articleId) use($app) {






  return $app['twig']->render('article.twig');
});

$app->get('/fenetres-CCU0003/fenetres-CCN0036', function() use($app) {
  // return 'Hello '.$app->escape($name);
  return $app['twig']->render('windows.twig');
});

$app->run();