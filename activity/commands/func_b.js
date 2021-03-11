//To work with file system on your computer, include the File System Module (fs) using require.
let fs=require("fs");
//Readline module is used to read the input stream line by line
let readline=require("readline");

let count=0; 

function func_b(dirPath){ 

    if (fs.existsSync(dirPath)) {
        //File Exists
        const file = readline.createInterface({ 
            input: fs.createReadStream(dirPath), 
        }); 

        file.on('line', (line) => { 
            if(line.length > 0) {
                console.log(count+". "+line);
                count++;
            }else{
                console.log(line);
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
    func_bFn:func_b
}