function concatenate(){
    return String.prototype.concat.apply('', arguments);
}

let str1 = "Hello ";
let str2 = "World ";
let str3 = ", ";

console.log(concatenate(str1, str2, str3));