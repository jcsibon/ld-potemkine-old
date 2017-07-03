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


$file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=922201227&single=true&output=csv",FILE_SKIP_EMPTY_LINES));

$file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=922201227&single=true&output=csv",FILE_SKIP_EMPTY_LINES));


foreach($file[0] as $cell) {
  $keys[]=preg_replace('/[^A-Za-z0-9\-]/', '', $cell);
}

array_shift($file);

foreach ($file as $i=>$row) {
    foreach($keys as $j=>$key)
      $newrow[$key] = str_replace("_", "-", $row[$j]);

  switch (substr($newrow['ParentID'],0,3)) {
      case "CCR":
          $CCU[$newrow['ID']]=$newrow;
      break;
      case "CCU":
          $SCU[$newrow['ID']]=$newrow;
      break;
      case "SCU":
          $CCN[$newrow['ID']]=$newrow;
      break;
      case "CCN":
          $SCN[$newrow['ID']]=$newrow;
      break;    
  }
}

foreach ($SCN as $row)
  $CCN[$row['ParentID']]["Content"][$row['ID']]=$row;

foreach ($CCN as $row)
  $SCU[$row['ParentID']]["Content"][$row['ID']]=$row;

foreach ($SCU as $row)
  $CCU[$row['ParentID']]["Content"][$row['ID']]=$row;

$catalog=$CCU;


/*
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
*/

$app['twig']->addGlobal('catalog', $catalog);

$app->get('/', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('index.twig');
});

$app->get('/catalog', function() use($app, $catalog) {
  echo '<pre>' . var_export($catalog, true) . '</pre>';
  die();
  return true;
});

$app->get('/{universeUrlname}-{universeUrlcode}/', function($universeUrlcode) use($app) {
  return $app['twig']->render('universe.twig');
})->assert('universeUrlcode', 'CCU[0-9\-]+');

$app->get('/{universeUrlname}-{universeUrlcode}/{subuniverseUrlname}-{subuniverseUrlcode}/{familyUrlname}-{familyUrlcode}/', function($universeUrlcode, $subuniverseUrlcode, $familyUrlcode) use($app) {
  if (in_array($familyUrlcode, ['CCN1010','CCN0025','CCN688463','CCN688464','CCN688465','CCN688466']))
  {


    $file = array_map("str_getcsv", file("https://docs.google.com/spreadsheets/d/1s10qJviUHayRFRHxSbMGNDKaIg7-gyYAjz6kOPhPm6g/pub?gid=1525879562&single=true&output=csv",FILE_SKIP_EMPTY_LINES));
    header('Content-Type: application/json');

    array_shift($file);

    foreach ($file as $row)
      $data[] = $row;

    die(json_encode($data));


    return $app['twig']->render($familyUrlcode.'.twig');
  }
  elseif (in_array($familyUrlcode, ['CCN688009', 'CCN0010']))
    return $app['twig']->render('CCN688009.twig');    
  else
    return $app['twig']->render('family.twig');
})->assert('universeUrlname', '[a-z\-]+')->assert('universeUrlcode', 'CCU[0-9\-]+')->assert('subuniverseUrlname', '[a-z\-]+')->assert('subuniverseUrlcode', 'SCU[0-9\-]+')->assert('familyUrlname', '[a-z\-]+')->assert('familyUrlcode', 'CCN[0-9\-]+');


$app->get('/{universeUrlname}-{universeUrlcode}/{subuniverseUrlname}-{subuniverseUrlcode}/{familyUrlname}-{familyUrlcode}/{subfamilyUrlname}-{subfamilyUrlcode}', function($universeUrlcode, $subuniverseUrlcode, $familyUrlcode, $subfamilyUrlcode) use($app) {
    return $app['twig']->render('family.twig');
})->assert('universeUrlname', '[a-z\-]+')->assert('universeUrlcode', 'CCU[0-9\-]+')->assert('subuniverseUrlname', '[a-z\-]+')->assert('subuniverseUrlcode', 'SCU[0-9\-]+')->assert('familyUrlname', '[a-z\-]+')->assert('familyUrlcode', 'CCN[0-9\-]+')->assert('subfamilyUrlname', '[a-z\-]+')->assert('subfamilyUrlcode', 'CCN[0-9\-]+');

$app->get('{productUrlname}-{productUrlcode}', function($productUrlcode) use($app) {
  return $app['twig']->render('product.twig');
})->assert('productUrlname', '[a-z\-]+')->assert('productUrlcode', 'FPC[0-9\-]+');

$app->get('article-{articleId}', function($articleId) use($app) {
  return $app['twig']->render('article.twig');
});

$app->get('/c/h/configurateur-fenetres', function() use($app) {
  return $app['twig']->render('configurateur.twig');
});

$app->run();
