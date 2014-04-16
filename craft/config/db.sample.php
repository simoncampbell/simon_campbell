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
    'simoncampbell.dev' => array (
        'server' => '127.0.0.1',
        'user' => 'root',
        'password' => 'enable',
        'database' => 'simon_campbell',
    ),

    // STAGING env settings
    'erskinestage.com' => array (
        'server' => '127.0.0.1',
        'user' => 'root',
        'password' => 'enable',
        'database' => 'simon_campbell',
    ),

    // LIVE env settings
    'simoncampbell.com' => array (
        'server' => '127.0.0.1',
        'user' => 'root',
        'password' => 'enable',
        'database' => 'simon_campbell',
    ),
);
