var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var firstPart = Numbers.slice(0, 3).join("");
var secondPart = Numbers.slice(3, 6).join("");
var thirdPart = Numbers.slice(6).join("");

function createPhoneNumber(numbers){
  var phoneNumber = `(${firstPart}) ${secondPart}-${thirdPart}`;
  return phoneNumber;
}

console.log(createPhoneNumber());