console.log("JS TEST");



let smallSample = [1,2,3];
// let smallSquare = math.square(smallSample);
// console.log(smallSquare);


let testy = [19];
let output = [];

for (i = 0; i < testy.length; i++) {
    let splitting = testy[i].toString().split('');
    console.log(splitting);
    output.push(splitting);
}
console.log(output);
for (i = 0; i < output.length; i++) {
    let PLS = parseInt(output);
    console.log(PLS);
}