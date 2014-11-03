requirejs.config({
    baseUrl: "/static/scripts",
    paths: {
        jquery: "libs/jquery",
        domReady: "libs/domReady",
        enquire: "libs/enquire",
        plugins: "libs/plugins",
        widgets: "libs/widgets"
    },
    shim: {
        "plugins/jquery.validate": ["jquery"],
        "plugins/jquery.fitvids": ["jquery"],
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
