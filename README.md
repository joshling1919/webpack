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
