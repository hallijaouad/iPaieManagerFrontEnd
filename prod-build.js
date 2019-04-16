const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/iPaieManagerFrontEnd/runtime.js',
    './dist/iPaieManagerFrontEnd/polyfills.js',
    './dist/iPaieManagerFrontEnd/main.js'
  ];

  await fs.ensureDir('D:/JHL/eclipse_java_ee_projets/iPaieManagerApi/src/main/resources/public');
  await concat(files, 'D:/JHL/eclipse_java_ee_projets/iPaieManagerApi/src/main/resources/static/app_angular.js');
  await fs.copyFile(
    './dist/iPaieManagerFrontEnd/styles.css',
    'D:/JHL/eclipse_java_ee_projets/iPaieManagerApi/src/main/resources/static/styles.css'
  );
  console.log('process concat cool for o2s poc angular.>> merci google');
})();
