// const obj = { apple: 10,
//              potato:45
//  };


// console.log(obj.potato); 
// console.log(obj['apple']); // 10 (it looks at the value of myKey, which is "apple")

// const arr = ['a','b','c','d','a','b'];
// let count= {};
// arr.forEach(item => {
//   count[item]=1;
// });
// console.log(count);


// programm to count the char in the array
const arr = ['a','b','c','d','a','b'];
let count= {};
arr.forEach(item => {
    if(count[item]){
        count[item]++
    }
    else{
  count[item]=1;}
});
const charrr =count; 
console.log(charrr);

console.log(charrr.b);