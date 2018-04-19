require.config({
    paths: {
        'jquery': 'jquery-2.1.1.min'
    }
});
define('helper', [
    'jquery',
], function($) {
    console.log('helper');
    return {
        trim: function(str) {
            return $.trim(str);
        }
    };
});