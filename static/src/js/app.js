require([
    'jquery',
    './app/api',
    'i18n!./nls/message'
], function($, api, i18n) {
    //var str = helper.trim('   and    ');
    // console.log(str);
    $('#user').after('<button>' + i18n.edit + '</button>');
    $('#user').on('click', function() {
        // api.getUser().then(function(user) {
        //     console.log(user);
        // });

        // api.getUserByJsonp().then(function(user) {
        //     console.log(user);
        // });

        api.loadUser();
    });
});