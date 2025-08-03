// /** Problem 04 - (Delete / Store) */

// var fileName= "slipdf.txt";
// // var file = "docx"

// // var file = fileName.charAt('#')
// // console.log("store")

// // var file = fileLast.includes("docx")
// //     console.log("jdjc");

// // var file = fileName.includes("pdf")
// //     console.log("asasc");

// if(fileName.includes('#') || fileName.includes("pdf") || fileName.includes("docx")){
//     console.log("store");
// }
// else{
//     console.log("delete")
// }

var fileName = "#exp.mp4";

if (fileName.startsWith('#') || fileName.endsWith("pdf") || fileName.endsWith("docx")) {
    console.log("store");
} else {
    console.log("delete");
}
