function helpFunction(){
    console.log(`The list of all possible commands is given below :-
                 1. node wcat.js filepath => To display the content of the file whose path is given in the terminal...
                 2. node wcat.js filepath1 filepath2 filepath3... => To display the content of all files whose path is given in the terminal...
                 3. node wcat.js -s filepath => While displaying the content of the file convert continuous multiple line breaks into a single line break...
                 4. node wcat -n filepath => While displaying the content of the file, numbering is provided to all the lines of file...
                 5. node wcat -b filepath => While displaying the content of the file, numbering is provided to all non-empty lines of file... 
                 6. node wcat -n -b filepath => Only -n command will get executed, which will provide numbering to all the lines of file while displaying the content of the file...
                 7. node wcat -b -n filepath => Only -b command will get executed, which will provide numbering to all the non-empty lines of file while displaying the content of the file...
                 8. node wcat -s -n filepath => While displaying thee content of the file, it will convert continuous multiple line breaks into a single line break and will provide numbering to all the lines of the file...
                 9. node wcat -n -s filepath => While displaying thee content of the file, it will convert continuous multiple line breaks into a single line break and will provide numbering to all the lines of the file...
                 10.node wcat -s -b filepath => While displaying thee content of the file, it will convert continuous multiple line breaks into a single line break and will provide numbering to all the non-empty lines of the file...
                 11.node wcat -b -s filepath => While displaying thee content of the file, it will convert continuous multiple line breaks into a single line break and will provide numbering to all the non-empty lines of the file...
               `);
}



// It is used to export functions from one module
module.exports={
    helpFunctionFn:helpFunction
}