const receivesAFunction = (a) => {
    return a();
}

function justAfunction (){
    return "''"
}

var fn = returnsANamedFunction();
function returnsANamedFunction() {
    return function view(){ return}
}

// const returnsANamedFunction = function(name = function hello(){}) {
//     let fn;
//     fn = name();
// } 

const returnsAnAnonymousFunction = () => {
 return function(){return "''"}
}

var fn = returnsAnAnonymousFunction()
console.log(returnsAnAnonymousFunction())