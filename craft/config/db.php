<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
    // ALL env settings
    '*' => array(
        'tablePrefix' => 'craft',
    ),

    // PRODUCTION env settings
    'campbell.dev' => array (
        'server' => '127.0.0.1',
        'user' => 'root',
        'password' => '',
        'database' => 'campbell',
    ),

    // LIVE env settings
    'simoncampbell.com' => array (
        'server' => 'localhost',
        'user' => 'av01727',
        'password' => '877.e34edTpe',
        'database' => 'av01727simoncampbell_prod',
    ),
);
