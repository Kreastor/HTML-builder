
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;


async function copyFile(source, destination)  {
    const sourcePath = path.join(__dirname, source);
    const destinationPath = path.join(__dirname, destination);

    await fsPromises.mkdir(destinationPath, { recursive: true });

    let files =  await fsPromises.readdir(destinationPath);

    for (let file of files) {
        await fsPromises.rm(path.join(destinationPath, file));
    }
    files = await fsPromises.readdir(sourcePath);

    for (let file of files) {
        await fsPromises.copyFile(path.join(sourcePath, file), path.join(destinationPath, file));
    }
}

copyFile('files', 'files-copy');


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