requirejs.config({
    "baseUrl": "/scripts/libs",
    "paths": {
      "app": "../app"
    },
    "shim": {
        "plugins/jquery.jpanelmenu": {
            deps: ['jquery']
        },
        "plugins/jquery.showpassword": {
            deps: ['jquery']
        },
        "plugins/jquery.validate": {
            deps: ['jquery']
        }
    }
});

// Load the main app module to start the app
requirejs(["../app/main"]);
