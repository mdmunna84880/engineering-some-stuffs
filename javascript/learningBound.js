const user = {
    id: 8997987
}

function getuserId(){
    return this.id;
}

console.log("\n\nWithoud bind function");
const unboundedFn = getuserId;
console.log(unboundedFn());

console.log("\n\nWith bind function");
const withBounded = getuserId.bind(user);
console.log(withBounded());

