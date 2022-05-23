
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const srcPath = path.join(__dirname, src);
const dstPath = path.join(__dirname, dst);

function copyDir(src, dst)  {

    await fsPromises.mkdir(dstPath, { recursive: true });

    let files =  await fsPromises.readdir(dstPath);
    
    for (let file of files) {
        await fsPromises.rm(path.join(dstPath, file));
    }

    files = await fsPromises.readdir(srcPath);
    
    for (let file of files) {
        await fsPromises.copyFile(path.join(srcPath, file), path.join(dstPath, file));
    }

}

copyDir('files', 'files-copy');


// try {
//     await copyFile('source.txt', 'destination.txt');
//     console.log('source.txt was copied to destination.txt');
//   } catch {
//     console.log('The file could not be copied');
//   }
  
//   // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
//   try {
//     await copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL);
//     console.log('source.txt was copied to destination.txt');
//   } catch {
//     console.log('The file could not be copied');
//   }