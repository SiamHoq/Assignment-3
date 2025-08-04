/** Problem -03 ( Medicine Planner ) */

var lastDay = 30 ;

for (let day =1 ; day<=lastDay ; day++){
    if(day%3===0){
        console.log(day+" - medicine")
        continue;
    }
    console.log(day+" - rest");
}