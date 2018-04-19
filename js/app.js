require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jquery-2.1.1.min',
        'text': './lib/text'
    },
    shim: {},
    // map: {
    //     'app/api': {
    //         'jquery': 'lib/jquery-2.1.1.min'
    //     },
    //     'app/api2': {
    //         'jquery': 'lib/jquery-2.1.2.min'
    //     }
    // },
    urlArgs: "_=" + (new Date()).getTime(), // 为方便开发调试加上时间戳避免缓存
    config: {
        text: {
            onXhr: function(xhr, url) {
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            }
        }
    }
});
require([
    'jquery',
    './app/api'
], function($, api) {
    //var str = helper.trim('   and    ');
    // console.log(str);
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