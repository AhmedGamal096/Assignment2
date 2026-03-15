const path = require ("node:path") ;
const EventEmitter = require ("node:events") ;
const emiter = new EventEmitter();
const fs = require ("node:fs") ;
const { log, error } = require("node:console");
const os = require("node:os");
const { emit } = require("node:process");

// 1. Write a function that logs the current file path and directory.

// 2. Write a function that takes a file path and returns its file name.
// function getBaseName(filePath){
//     return path.basename(filePath) ;
// }
// const x = getBaseName(": /user/files/report.pdf") ;
// console.log(x);

// 3. Write a function that builds a path from an object

// 4. Write a function that returns the file extension from a given file path.
// function getFileExt(filePath){
//     return path.extname(filePath) ;
// }
// const x = getFileExt(" /docs/readme.md") ;
// console.log(x);

// 5. Write a function that parses a given path and returns its name and ext.
// function getParsesPath(filePath){
//     const name = path.basename(filePath) ;
//     const ext = path.extname(filePath) ;
//     return {
//         name: name,
//         ext: ext 
//     };
// }
// const x = getParsesPath(" /home/app/main.js") ;
// console.log(x);

// 6. Write a function that checks whether a given path is absolute.
// function checkExistFile(filePath){
//     return fs.existsSync(filePath) ;
// }
// const x = checkExistFile("text.txt") ;
// console.log(x);

// 7. Write a function that joins multiple segments.
// function joinStrToPath(...str){
//    return path.join(...str) ;
// }
// const x = joinStrToPath("src","components", "App.js") ;
// console.log(x);

// 8. Write a function that resolves a relative path to an absolute one.
// function getResolvePath(relativePath){
//    return path.resolve(relativePath) ;
// }
// const x = getResolvePath("./text.txt") ;
// console.log(x);

// 9. Write a function that joins two paths .
// function joinTwoPaths(path1 , path2){
//    return path.join(path1 , path2) ;
// }
// const x = joinTwoPaths(" /folder1" , "folder2/file.txt") ;
// console.log(x);

// 10. Write a function that deletes a file asynchronously.
// function deleteFile(filePath){
//     fs.unlink(filePath , (err)=>{
//     if(err){
//         console.log(err); 
//     }else{
//         console.log("The text.txt is deleted.");  
//     }
// });
// } ;
// deleteFile("text.txt");

// 11. Write a function that creates a folder synchronously.
// function creatSyncFolder(filePath){
//     try{
//         fs.mkdirSync(filePath , {recursive:true});
//         console.log("The folder is created Successfully.");
        
//     }catch{
//         console.log(err); 
//     }  
// } 
// creatSyncFolder("./Folder1");

// 12. Create an event emitter that listens for a "start" event and logs a welcome message.
// emiter.on("start" , ()=>{
//     console.log("Welcome event triggered!");
// });
// emiter.emit("start");

// 13. Emit a custom "login" event with a username parameter.
//     emiter.on("login" , (userName)=>{
//     console.log(`User logged in: ${userName}`);
//     });
//     emiter.emit("login" , "Ahmed");

// 14. Read a file synchronously and log its contents.
//     try {
//     const data = fs.readFileSync("text.txt", "utf8");
//     console.log(data);
//     } catch (err) {
//     console.log(err);
//     }

// 15. Write asynchronously to a file.
//     const content = "Async save" ;
//     fs.writeFile("text.txt", content, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file written successfully"); 
//   }
//   });

// 16. Check if a directory exists .
//    const result = fs.existsSync("text.txt") ;
//    console.log(result);

// 17. Write a function that returns the OS platform and CPU architecture.
//     function getOsInfo (){
//     return {platform: os.platform(), arch: os.arch()};
//     }
//     const info = getOsInfo();
//     console.log(info);
    

