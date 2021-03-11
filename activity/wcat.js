//To work with file system on your computer, include the File System Module (fs) using require.
let fs = require('fs');

//To work with directories and file paths, include the Path Module (path) using require.  
let path = require('path');

//Importing the module to include functions defined in another file.
const { func_sFn } = require('./commands/func_s');
const { helpFunctionFn } = require('./commands/help');
const { func_nFn } = require('./commands/func_n');
const { func_bFn } = require('./commands/func_b');
const { readMultipleFileFn } = require('./commands/readMultipleFile');
const { readSingleFileFn } = require('./commands/readSingleFile'); 
const { funSBFn }= require('./commands/func_sb_or_bs');
const { funSNFn }= require('./commands/func_sn_or_ns');

//Taking the command as input from the user.
let command_input=process.argv.slice(2);

//Calculating and printing the length of the command taken as input from the user.
let commandInputLength=command_input.length;

// If the command given by the user is node wcat.js -n -b filepath, then only the first option i.e. -n will work.
if(command_input[0]=="-n" && command_input[1]=="-b"){
    if(commandInputLength==3){
        func_nFn(command_input[2]);
    }
    else{
        console.log("WRONG COMMAND !!! Please go to help section (node wcat.js -h) to see the list of all possible commands.....");
    }
}

// If the command given by the user is node wcat.js -b -n filepath, then only the first option i.e. -b will work.
else if(command_input[0]=="-b" && command_input[1]=="-n"){
    if(commandInputLength==3){
        func_bFn(command_input[2]);
    }
    else{
        console.log("WRONG COMMAND !!! Please go to help section (node wcat.js -h) to see the list of all possible commands.....");
    }
}

// If the command given by the user is node wcat.js -s -n filepath or node wcat.js -n -s filepath , then first option i.e. (-s) will be executed followed by (-n).
else if((command_input[0]=="-s" && command_input[1]=='-n') || (command_input[0]=="-n" && command_input[1]=='-s')){
    if(commandInputLength==3){
        funSNFn(command_input[2]);
    }
    else{
        console.log("WRONG COMMAND !!! Please go to help section (node wcat.js -h) to see the list of all possible commands.....");
    }

}


// If the command given by the user is node wcat.js -s -b filepath or node wcat.js -b -s filepath, then first option i.e. (-s) will be executed followed by (-b).
else if((command_input[0]=="-s" && command_input[1]=='-b') || (command_input[0]=="-b" && command_input[1]=='-s')){
    if(commandInputLength==3){
        funSBFn (command_input[2]);
    }
    else{
        console.log("WRONG COMMAND !!! Please go to help section (node wcat.js -h) to see the list of all possible commands.....");
    }
}



// If the command given by the user is node wcat.js -h, it will provide list of all possible commands.  
else if(command_input[0]=="-h"){
    if(commandInputLength==1){
        helpFunctionFn();
    }
    else{
        console.log("WRONG COMMAND !!! Please go to help section (node wcat.js -h) to see the list of all possible commands.....");

    }
}

// If the command given by the user is node wcat.js -n filepath, it will provide numbering to all the lines in a file while displaying.
else if(command_input[0]=="-n"){
    if(commandInputLength==2){
        func_nFn(command_input[1]);
    }
    else{
        console.log("WRONG COMMAND !!! Please go to help section (node wcat.js -h) to see the list of all possible commands.....");
    }
}

// If the command given by the user is node wcat.js -b filepath, it will provide numbering to non-empty lines in a file while displaying.
else if(command_input[0]=="-b"){
    if(commandInputLength==2){
        func_bFn(command_input[1]);
    }
    else{
        console.log("WRONG COMMAND !!! Please go to help section (node wcat.js -h) to see the list of all possible commands.....");
    }
}

// If the command given by the user is node wcat.js -s filepath, it will convert all continuous multiple line breaks in a file into a singular line break. 
else if(command_input[0]=="-s"){
    if(commandInputLength==2){
        func_sFn(command_input[1]);
    }
    else{
        console.log("WRONG COMMAND !!! Please go to help section (node wcat.js -h) to see the list of all possible commands.....");
    }
}

// If the command given by the user is node wcat.js filepath or node wcat.js filepath1 filepath2 filepath3... , it will display the content of all the files whose path is given in the terminal.
else if(command_input.length>0){
    for(let i=0;i<command_input.length;i++){
        console.log("\n");
        if((fs.existsSync(command_input[i]) && fs.lstatSync(command_input[i]).isDirectory())|| (fs.existsSync(command_input[i]) && fs.lstatSync(command_input[i]).isFile())){
                console.log(path.basename(command_input[i])+" FILE DATA IS PRINTED!!!");
                readMultipleFileFn(command_input[i]);
        }
        else if(command_input[i].length>2){
            console.log("Please Enter A Valid File Path");
        }
        else{
            console.log("WRONG COMMAND !!! Please go to help section (node wcat.js -h) to see the list of all possible commands.....");
        }
    }
}

// If the command given by the user is invalid, print wrong command.
else{
        console.log("WRONG COMMAND !!! Please go to help section (node wcat.js -h) to see the list of all possible commands.....");
    }
   



