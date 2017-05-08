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

$file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1971894571&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
$keys = array_shift($file);
foreach ($file as $i=>$row) {
    $row = array_combine($keys, $row);
    $catalog[$row['universeUrlname']]=$row;
}

$file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1121908549&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
$keys = array_shift($file);
foreach ($file as $i=>$row) {
    $row = array_combine($keys, $row);
    $catalog[$row['universeUrlname']]['subuniverses'][$row['subuniverseUrlname']]=$row;
}

$file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1183165030&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
$keys = array_shift($file);
foreach ($file as $i=>$row) {
    $row = array_combine($keys, $row);
    $catalog[$row['universeUrlname']]['subuniverses'][$row['subuniverseUrlname']]['families'][$row['familyUrlname']]=$row;
}
/*
$file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1976579302&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
$keys = array_shift($file);
foreach ($file as $i=>$row) {
    $row = array_combine($keys, $row);
    $catalog[$row['universeUrlname']]['subuniverses'][$row['subuniverseUrlname']]['families'][$row['familyUrlname']]['criterias'][$row['criteriaName']]=$row;
}
*/
$app['twig']->addGlobal('catalog', $catalog);

$app->get('/', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('index.twig');
});

$app->get('/catalog', function() use($app, $catalog) {
  header('Content-type: application/json');
  die(json_encode($catalog));
  return true;
});

$app->get('/{universeUrlName}-CCU0000/', function($universeUrlName) use($app) {
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