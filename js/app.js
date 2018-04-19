//通过浏览器的cookie获取当前语言
var language = document.cookie.match(/language=([^;]+)/);
var locale = 'zh-cn';
if (language) {
    locale = language[1].split('_')[0];
}

require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jquery-2.1.1.min',
        'text': './lib/text',
        'i18n': './lib/i18n'
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
        },
        i18n: {
            locale: locale
        }
    }
});
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