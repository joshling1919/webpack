# Webpack

## Purpose of Webpack
Main purpose is to link up JS modules.
1. Execute JavaScript modules in the correct order, factoring in dependencies between the JS modules.
2. Limit the number of JS files that need to be loaded over HTTP.

All other things (transpilation, etc.) are just added bonuses

## Different Module Systems
Module systems are rulesets on how different modules in the application should be linked together.
1. CommonJS
    - Module System implemented by Node.js
    - Whenever you write Node.js code (code executed outside of the browser), chances are you're using CommonJS
    - 'require' and 'module.exports' keywords
2. AMD
    - "Asynchronous Module Definition"
    - More commonly used in front end applications, where code can be loaded up asynchronously
    - 'define' and 'require' keywords
3. ES2015
    - 'export' and 'import' statements
    - The direction JavaScript is moving towards

## Command Ran at Terminal
1. Install webpack globally, which gives you ability to directly run 'webpack' on the command line.
    - Not the best approach
    - When you install webpack globally and then run `webpack` on your command line, your computer will look at all of your globally installed modules and fine one called 'webpack' and run it.
2. If you set up a script in the package.json:
```json
"scripts": {
  "build": "webpack"
}
```
and only install webpack in that specific project and run 'npm run build', then npm will look inside the node modules inside our current project directory. The reason that this is a big deal is because when you install a module globally, you can only have one version of a module installed at a time. If we wanted one project to use webpack version 1, and another using webpack version 2, we'd have a pretty tough time juggling these different versions using the global module.

## What's actually going on in bundle.js
```js
// pseudocode
// not exactly what webpack is doing, but close.
var myModules = [
  function() {
    const sum = (a, b) => a + b;
    return sum;
  },
  function() {
    const sum = myModules[0]();
    const total = sum(10, 10);
    console.log(total)
  }
];

var entryPointIndex = 1;
myModules[entryPointIndex]();
```

The above code is the simplified version of the `bundle.js` in `intro_project`. The real `bundle.js` is more fancified code that involves compatibility with different module systems, as well as to handle caching of modules so that we're not repeatedly calling the same module functions again and again.

## Module Loaders
Module loaders are used to do some pre-processing on our files before they're added to our bundle.js. Loaders are commonly used to implement transpiling for ES2015 code (ie. Babel). They can also be used to handle CSS, handle images, all different types of files can be enabled for use with Webpack by use of these module loaders.

### Babel
Babel is used for transpiling JavaScript, usually from ES2015 to ES5.

There are 3 separate modules that gets Babel working. There are probably several dozen libraries associated with Babel.
1. `babel-loader`- Teaches babel how to work with webpack (this is the compatibility layer). Babel officially has support for over a dozen build systems. Instead of teaching babel itself how to work with all the different build systems, babel uses specific libraries to handle the compatibility for each system. `babel-loader` is the one for webpack.
2. `babel-core`- The heart of babel. Knows how to take in code, parse it, and generate some output files.
3. `babel-0present-env`- Ruleset for telling babel exactly what pieces of ES2015/5/7 syntax to look for, and how to turn it into ES5 code. The actual brains for how to do the transpilation.

### `css-loader` and `style-loader`
- `css-loader`: knows how to deal with CSS imports. It tells webpack, "Hey here's how to read the CSS file and parse it." However, it doesn't actually know what to do with it.
- `style-loader`: takes CSS imports and adds them to the HTML document. It takes any imported CSS files and inject it into a style tag into our HTML document.

## Plugins
Work a little bit outside of the webpack pipeline. They have the ability to keep files from ending up inside of the bundle.js output.
