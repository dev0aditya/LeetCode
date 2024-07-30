let num = 101;

if (isPalindrome(num)) {
  console.log("True");
} else {
  console.log("False");
}

function isPalindrome(num) {
  let holder = num.toString().split("");
  let value = "";
  for (let i = holder.length - 1; i >= 0; i--) {
    value += holder[i];
  }
  value = Number(value);
  return num == value;
}
