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


foreach($file[0] as $cell) {
  $keys[]=preg_replace('/[^A-Za-z0-9\-]/', '', $cell);
}

array_shift($file);

foreach ($file as $i=>$row) {
    foreach($keys as $j=>$key)
      $newrow[$key] = $row[$j];
  
  

  switch (substr($newrow['ParentID'],0,3)) {
      case "CCR":
          $precatalog["Univers"][$newrow['ID']]=$newrow;
      break;
      case "CCU":
          $precatalog["Sous-univers"][$newrow['ID']]=$newrow;
      break;
      case "SCU":
          $precatalog["Familles"][$newrow['ID']]=$newrow;
      break;
      case "CCN":
          $precatalog["Sous-familles"][$newrow['ID']]=$newrow;
      break;    
  }
}

foreach ($precatalog["Sous-familles"] as $row)
  $precatalog["Familles"][$row['ParentID']]["Content"][]=$row;

foreach ($precatalog["Familles"] as $row)
  $precatalog["Sous-univers"][$row['ParentID']]["Content"][]=$row;

foreach ($precatalog["Sous-univers"] as $row)
  $precatalog["Univers"][$row['ParentID']]["Content"][]=$row;

$catalog=$precatalog["Univers"];

?>
<pre>
    <?php
        print_r($catalog);
    ?>
</pre>
<?
die();

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

$app->get('/{universeUrlname}-CCU0000/', function($universeUrlname) use($app) {
  return $app['twig']->render('universe.twig');
})->assert('universeUrlname', '[a-z\-]+');

$app->get('/{universeUrlname}-CCU0000/{subuniverseUrlname}-CCN0000/{familyUrlname}-CCN0000/', function($universeUrlname, $subuniverseUrlname, $familyUrlname) use($app) {
  if ($universeUrlname == 'fenetres' && $subuniverseUrlname == 'fenetres-portes-fenetres-baies-coulissantes')
    return $app['twig']->render('windows.twig');
  else
    return $app['twig']->render('family.twig');
})->assert('universeUrlname', '[a-z\-]+')->assert('subuniverseUrlname', '[a-z\-]+')->assert('familyUrlname', '[a-z\-]+');


$app->get('/{universeUrlname}-CCU0000/{subuniverseUrlname}-CCN0000/{familyUrlname}-CCN0000/{subfamilyUrlname}-CCN0000', function($universeUrlname, $subuniverseUrlname, $familyUrlname, $subfamilyUrlname) use($app) {
    return $app['twig']->render('family.twig');
})->assert('universeUrlname', '[a-z\-]+')->assert('subuniverseUrlname', '[a-z\-]+')->assert('familyUrlname', '[a-z\-]+')->assert('subfamilyUrlname', '[a-z\-]+');

$app->get('product-FPC{productId}', function($productId) use($app) {
  return $app['twig']->render('product.twig');
});

$app->get('article-{articleId}', function($articleId) use($app) {
  return $app['twig']->render('article.twig');
});

$app->get('/c/h/configurateur-fenetres', function() use($app) {
  return $app['twig']->render('configurateur.twig');
});

$app->get('/configurateur/step-{step}', function($step) use($app) {
  return $app['twig']->render('configurateur.twig');
})->assert('universeUrlname', '[0-9]+');

$app->run();