// What is a javascript testing framework?
// A pile of JS code for testing JS
// e.g Chai, Nose
// Unit Testing - Testing a Single Unit (e.g. a function)
// Not Black Box testing which which tests the whole application form the OUTSIDE

function testMe(a, b) {
    return a + b;
}

// console.log(testMe(6,7)) //expect 13
testData = [
    { inputs: [6, 7], output: 13 },
    { inputs: [6, 7], output: 99 }, //bad test won't pass
    { inputs: [12, 13], output: 25 }
];

// specific one-liner without runner function
testData.forEach((t, i) => console.log(i, testMe(...t.inputs) === t.output ? "PASS" : "FAIL"));

// generic one liner definition of generic runner function
const runner1 = (fn,ioList)=> ioList.forEach((t, i) => console.log(i, fn(...t.inputs) === t.output ? "PASS" : "FAIL"));
runner1(testMe, testData); // use runner1

//long form generic test runner
function runner(fn, ioList) {
    ioList.forEach((test, i) => {
        result = fn(...test.inputs); //... spread , unpacks into individual (not an array) comma separated vaiables
        success = result === test.output; //match expected?
        console.log(i, success ? "PASS" : "FAIL");
    });
}
//use it
runner(testMe, testData);