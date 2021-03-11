//To work with file system on your computer, include the File System Module (fs) using require.
let fs = require('fs'); 
//Readline module is used to read the input stream line by line
let readline = require('readline'); 

let count=1;

function func_n(dirPath){
    if (fs.existsSync(dirPath)) {
        //File Exists
        const file = readline.createInterface({ 
             input: fs.createReadStream(dirPath), 
        }); 
    
        file.on('line', (line) => { 
            console.log(count+". "+line);
            count++; 
        }); 
        }
    else{
        //File Does Not Exists
        console.log('Error!!! File Not Found');
    }

}

// It is used to export functions from one module
module.exports={
    func_nFn:func_n
}