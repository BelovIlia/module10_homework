let array = [5,2,5,5];
let b = true;
for ( let i = 1; i < array.length; i++){
  if(array[i] !== array[i -1]){
    b = false;
  }
}
console.log(b);