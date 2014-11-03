<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    // ALL env settings
    '*' => array(
        'omitScriptNameInUrls' => true,
    ),

    // PRODUCTION env settings
    'campbell.dev' => array (
        'siteUrl' => 'http://campbell.dev/',
    ),

    // STAGING env settings
    'erskinestage.com' => array (

    ),

    // LIVE env settings
    'simoncampbell.com' => array (

        'maxUploadFileSize' => 50000000,
    ),
);