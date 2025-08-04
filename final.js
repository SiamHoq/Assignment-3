// Problem - 01  (Divide the Asset)

var area = 800;

var result = 0;

result = area / 2;

console.log(result);


// Problem - 02  (Cycle or  Laptop)

var money = 10000;

if(money>=25000){
    console.log("Laptop");
}
else if(money>=10000){
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */

var lastDay = 30 ;

for (let day =1 ; day<=lastDay ; day++){
    if(day%3===0){
        console.log(day+" - medicine")
        continue;
    }
    console.log(day+" - rest");
}


// /** Problem 04 - (Delete / Store) */

var fileName = "#exp.mp4";

if (fileName.startsWith('#') || fileName.endsWith("pdf") || fileName.endsWith("docx")) {
    console.log("Store");
} else {
    console.log("Delete");
}


// Problem 05 - ( PH Email Generator ) 

var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
// var student= { name: "monu" , roll: 99,department: "eee"  }
// var student= { name: "mewo" , roll: 96 ,department: "cse"  }

console.log(student.name+student.roll+"."+student.department+"@ph.ac.bd");


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
let year = 1;


for (year = 1; year <= experience; year++) {
    startingSalary = startingSalary + (startingSalary*(5/100));
    // sum = sum+ i

}
    console.log("final selary : ", startingSalary.toFixed(2));

