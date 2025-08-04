/** Problem -03 ( Medicine Planner ) */

var lastDay = 30 ;

// var day = 1;
// while(day<=lastDay){
   
//     if(day%3===0){
//         console.log(day+" - medicine")
//     }

//     if(day%3!=0){
//             console.log(day+" - rest");
//     }
    
//     day++;
// }

for (let day =1 ; day<=lastDay ; day++){
    if(day%3===0){
        console.log(day+" - medicine")
        continue;
    }
    console.log(day+" - rest");
}