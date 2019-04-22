const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/iPaieManagerFrontEnd/runtime.js',
    './dist/iPaieManagerFrontEnd/es2015-polyfills.js',
    './dist/iPaieManagerFrontEnd/polyfills.js',
    './dist/iPaieManagerFrontEnd/main.js',
    './dist/iPaieManagerFrontEnd/5.js',
    './dist/iPaieManagerFrontEnd/6.js'
  ];

  await fs.ensureDir('D:/j2ee/iPaieManager/iPaieManagerApi/src/main/resources/public');
  await concat(files, 'D:/j2ee/iPaieManager/iPaieManagerApi/src/main/resources/static/app_angular.js');
  await fs.copyFile(
    './dist/iPaieManagerFrontEnd/styles.css',
    'D:/j2ee/iPaieManager/iPaieManagerApi/src/main/resources/static/styles.css'
  );
  console.log('process concat cool for o2s poc angular.>> merci google');
})();
