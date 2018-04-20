({
    appDir: './src',
    baseUrl: './js',
    dir: './build',
    optimize: 'uglify', //不打包-none
    mainConfig: 'src/js/require.config',
    //name: 'app'
    modules: [{
            name: 'app',
            //exclude: ['jquery'],//去掉这个文件相关的所有依赖文件
            //excludeShallow: ['jquery'],//只去掉一个文件
            //include: ['helper'],//打包这个文件
            insertRequire: ['helper'], //打包的时候增加代码，额外引入文件，但是不打包在一起
        },
        {
            name: 'user'
        }
    ]
});