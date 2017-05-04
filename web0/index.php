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

$app->get('/univers/{name}', function($name) use($app) {
  // return 'Hello '.$app->escape($name);
  return $app['twig']->render('family.twig');
});

$app->get('/univers/{name}', function($name) use($app) {
  // return 'Hello '.$app->escape($name);
  return $app['twig']->render('universe.twig');
});


$app->get('/fenetres-CCU0003/fenetres-CCN0036', function($name) use($app) {
  // return 'Hello '.$app->escape($name);
  return $app['twig']->render('windows.twig');
});


$app->run();



