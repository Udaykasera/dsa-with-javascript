// const arr=[10,20,30,40,50,60,70];
// const Filtering =function(value){
// return value>30;
// }
// const arrr= arr.filter(Filtering);
//  function Filtering(value){
// return value>30;
// }
// console.log(arrr);\\\\

// const arrr= arr.filter( filtering=(value)=>{
//     return arrr>10;
// });
// console.log(arrr);


// without filter() in built method

const arr=[10,20,30,40,50];
let arrr=[];
let dumy;
for(let i=0; i<arr.length; i++){
    if(arr[i]>20){
      arrr.push(arr[i])
    }
}
console.log(arrr);

    



