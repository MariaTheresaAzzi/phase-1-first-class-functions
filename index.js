const chai = "chai";
const spies = "chai-spies";
chai.use(spies);

function spy() {
    console.log("the chai spices");
}
function receivesAFunction(spy) {
    spy();
}


function returnsANamedFunction() {
    return function fn() {
        return "function";
    }
}



function returnsAnAnonymousFunction() {
    return function () {
        return "function";
    }
}

// const _sum2 = function() { // anonymous function
//     return function sum(x,y,z){
//         return (x+y+z);
//     };
// }