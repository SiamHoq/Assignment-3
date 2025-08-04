/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
let year = 1;


for (year = 1; year <= experience; year++) {
    startingSalary = startingSalary + (startingSalary*(5/100));
    // sum = sum+ i

}
    console.log("final selary : ", startingSalary.toFixed(2));

