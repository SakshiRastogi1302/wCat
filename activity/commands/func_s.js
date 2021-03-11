//To work with file system on your computer, include the File System Module (fs) using require.
let fs=require("fs");
//To work with directories and file paths, include the Path Module (path) using require.  
let path=require("path");
//Readline module is used to read the input stream line by line
let readline=require("readline");

let blank=0;

function func_s(dirPath){
    if (fs.existsSync(dirPath)) {
            //File Exists
            const file = readline.createInterface({ 
                input: fs.createReadStream(dirPath), 
            }); 
            file.on('line', (line) => { 
                if(line.length > 0) {
                    if(blank>0){
                        console.log();
                    }
                    console.log(line);
                    blank = 0;
                }else{
                    blank++;
                }
            }); 
        }
    else{
            //File Does Not Exists
            console.log('Error!!! File Not Found');
        }
      
}

// It is used to export functions from one module
module.exports={
    func_sFn:func_s
}