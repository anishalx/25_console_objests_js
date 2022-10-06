let a = 5;
let b = 7;
console.log(a+b)

//to make a tabular form
let ani = {a:2,b:6,c:5,f:9}
console.table(ani)

console.log("for console")
console.info(" to show any info")
console.warn("for warning")
console.error("for show error")

console.assert("if assertion true then its fine" !=false)
console.assert("if assertion false then it gives you error" ==false)

console.time("time to work")
console.timeEnd("time to work")

console.time("for loop")

for(let i=0;i<695;i++){
  console.log("i+5")
}
console.timeEnd("for loop")

console.time("while loop")

let k = 0;
while(k<695){
  console.log("k+5")
  k++;
}
console.timeEnd("while loop")

