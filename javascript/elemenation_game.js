function elemenateTheNumber(array){

    while(array.length > 1){
        let remainingArray = [];
        for(let i = 1; i < array.length; i += 2){
            remainingArray.push(array[i]);
        }
        array = remainingArray;
        if(array.length === 1){
            break;
        }
        array.reverse();
        remainingArray = [];
        for(let i = 1; i < array.length; i += 2){
            remainingArray.push(array[i]);
        }
        remainingArray.reverse();
        array = remainingArray;
    }

    return array;
}

function elemenateTheNumber(array) {
  let left = true;
  let right = false;

  while (array.length > 1) {
    if (left) {
      for (let i = 0; i < array.length; i++) {
        array.splice(i, 1);
      }
      left = false;
      right = true;
    } else {
      for (let i = array.length-1; i > 0; i -= 2) {
        array.splice(i, 1);
      }
      right = false;
      left = true;
    }
  }

  return array;
}

console.log(elemenateTheNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));