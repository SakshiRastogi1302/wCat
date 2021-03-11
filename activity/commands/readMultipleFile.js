//To work with file system on your computer, include the File System Module (fs) using require.
let fs = require('fs');

function readMultipleFile(dirPath){
        try {
            //File Exists
            var data = fs.readFileSync(dirPath, 'utf8');
            console.log(data);    
        } catch(e) {
            //File Does Not Exists
            console.log('Error!!! File Not Found');
        }
}

// It is used to export functions from one module
module.exports={
    readMultipleFileFn:readMultipleFile
}