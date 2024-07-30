let arr = [2, 5, 5, 11];
let target = 10;

console.log(twoSum(arr, target));

function twoSum(arr, target) {
  let holder = [];
  looped: for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j + 1] == target) {
        holder.push(i, j + 1);
        break looped;
      }
    }
  }
  return holder;
}
