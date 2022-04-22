//Importing the path module from node which we shall use
const path = require('path');

//dev dependency plugin used to dynamically create html files
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Webpack Configuration Settings Go Here
module.exports = {
    //enables useful tools for development, production mode enables many optimisations for production build
    mode: 'development', 
    entry: {

        //Find the dir I'm in and look for the src folder
        //main is a label for the entry files 

        main: path.resolve(__dirname, 'src/index.js'),

    },

    //output indicates how where the bundled file will go
    output: {
        path: path.resolve(__dirname, 'dist'),

        //refers to the name you want the resulting bundled file to have 
        //[name] points to the label in the entry section and [contenthash] is used for file version management in this case 'main'
        filename: '[name].bundle.js',

        //empties the dist folder and add the newly bundled files
        clean: true,

        //removes hash from imported assets title and adds its original name and extension
        assetModuleFilename: 'images/[name][ext]',
    },

    //Webpack only understands json and js by default, loaders assist in bundling other file types by turning them into modules that can be imported by JavaScript
    
    //#Loaders
    module: {
        rules: [
            //css loader looks for the css file and turns it into a module and pushes to JavaScript
            //style loader takes the modules imported by the JS file and injects it the html file
            
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.s[ac]ss$/,
            use: ['style-loader','css-loader','sass-loader'] },

            //asset resource loader give us the image as module which we import
            {test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
             type:'asset/resource'},
             
        ],
    },


    //Plugins
    plugins: [new HtmlWebpackPlugin({ //this will generate an html file using the htmlwebpackplugin installed in package.json
        //Pass in options like what is the title of your webpage
        title: 'My Webpack',//refers to the title that will be added to the generated html file
        filename: 'index.html',//refers to desired name noe will give to the newly created html file
        h1: 'Project Demo',
        p: 'Welcome Evans',
        template: path.resolve(__dirname, 'index.html'),
    })],
 }