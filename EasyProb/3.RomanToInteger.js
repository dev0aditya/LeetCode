let roman = "MCMXCIV";

console.log(romanConverter(roman));

function romanConverter(roman) {
  let value = 0;
  let prev = 0;

  function comparer(charc) {
    switch (charc) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  }

  for (let i = roman.length - 1; i >= 0; i--) {
    let current = comparer(roman[i]);

    if (current < prev) {
      value -= current;
    } else {
      value += current;
    }

    prev = current;
  }
  return value;
}
