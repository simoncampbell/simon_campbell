requirejs.config({
    "baseUrl": "/static/scripts/libs",
    "paths": {
      "app": "../app"
    }
});

// Load the main app module to start the app
requirejs(["../app/main"]);
