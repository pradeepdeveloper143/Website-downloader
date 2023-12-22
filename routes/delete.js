var path = require('path');
var fsExtra = require('fs');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const fsExtra = require('fs-extra');
  try {
    fsExtra.emptyDirSync('./public/sites');
    console.log('All files in the directory deleted successfully');
  } catch (err) {
    console.log(err);
  }

// 👇️ if you use CommonJS require()
// const fs = require('fs');
// const path = require('path');

// function deleteAllFilesInDir(dirPath) {
//   try {
//     fs.readdirSync(dirPath).forEach(file => {
//       console.log(file);
//       fs.rmSync(path.join(dirPath, file));
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// deleteAllFilesInDir('./public/sites');

// console.log('Removed all files from the specified directory');

  res.send('respond with a resource');
});

module.exports = router;
