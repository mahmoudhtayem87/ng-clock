const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/ng-clock/runtime.js',
        './dist/ng-clock/polyfills.js',
        './dist/ng-clock/main.js'
    ];
    await fs.ensureDir('angular-elements-build');
    await concat(files, 'angular-elements-build/angular-elements.js');
    await fs.copy('./dist/ng-clock/styles.css', 'angular-elements-build/styles.css');
    //uncomment the below line if you have assets folder in your project
    //await fs.copy('./dist/ng-clock/assets/', 'angular-elements/assets/');
})();