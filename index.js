var fs = require('fs-extra')

console.log("Copy files needed from: fom-ui/node_modules/src");
console.log("Origin: jp-ui-layout");
console.log("Destination: fom-ui");

fs.copy('/Proyectos/jpm-ui-layout/src', '/Proyectos/fom-ui/node_modules/jp-ui-layout/src', function (err) {
  if (err) return console.error(err)
  console.log("Copying fom-ui/node_modules/src: SUCCESSFULLY");
});

fs.copy('/Proyectos/jpm-ui-layout/lib', '/Proyectos/fom-ui/node_modules/jp-ui-layout/lib', function (err) {
  if (err) return console.error(err)
  console.log("Copying fom-ui/node_modules/lib: SUCCESSFULLY");
});
