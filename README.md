# Webpack

## Purpose of Webpack
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
