let input = ["flower", "flow", "flight"];
let keeper = "";

console.log(CommonPrefix(input));

function CommonPrefix(input) {
  for (let i = 0; i < input[0].length; i++) {
    let value = input[0][i];
    for (let j = 1; j < input.length; j++) {
      if (input[j][i] !== value) {
        return keeper;
      }
    }
    keeper += value;
  }
  return keeper;
}
