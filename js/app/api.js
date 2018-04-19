define([
    'jquery'
], function($) {
    return {
        getUser: function() {
            var def = $.Deferred();
            require(['./app/user'], function(user) {
                def.resolve(user);
            });
            return def;
        },
        getUserByJsonp: function() {
            //传统jsonp
            // $.ajax({
            //     url: '请求地址',
            //     dataType: 'jsonp',
            //     jsonpCallback: 'onloaded',
            //     success: function(data) {
            //         console.log(data);
            //     }
            // });
            //require 的jsonp
            require(['请求地址'], function(user) {
                console.log(user);
            });

        }
    }
});

// function onloaded(user) {
//     console.log(user);
// }