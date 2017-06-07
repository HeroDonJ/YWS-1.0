requirejs.config({
    baseUrl : '/assets',
    paths : {
        jquery : 'jquery/jquery.min',
        bootstrap : 'bootstrap/js/bootstrap.min',
        common : '../js/common',
        login : '../js/login'
    },
    shim : {
        bootstrap : {
            deps : ['jquery']
        }
    }
});