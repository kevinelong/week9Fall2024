// What is a javascript testing framework?
// A pile of JS code for testing JS
// e.g Chai, Nose
// Unit Testing - Testing a Single Unit (e.g. a function)
// Not Black Box testing which which tests the whole application form the OUTSIDE

function testMe(a, b){
    return a + b;
}

// console.log(testMe(6,7)) //expect 13
testData = [
    {inputs:[6,7], output:13},
    {inputs:[6,7], output:99}, //bad test won't pass
    {inputs:[12,13], output:25}
];

function runner(fn, ioList){
    ioList.forEach((test,i) => {
        result = fn(...test.inputs); //... spread , unpacks into individual (not an array) comma separated vaiables
        success = result === test.output; //match expected?
        if(success){
            console.log("PASS",i)
        }else{
            console.log("FAIL",i)
        }
    });
}

runner(testMe, testData);