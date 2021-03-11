//To work with file system on your computer, include the File System Module (fs) using require.
let fs = require('fs'); 
//Readline module is used to read the input stream line by line
const readline = require('readline'); 

let count=1;
let blank = 0;

function func_sb_or_bs (dirPath){

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
                console.log(count,". ",line);
                count++;
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
module.exports = {
    funSBFn : func_sb_or_bs
}