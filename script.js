function isPalindrome(str) {
  let palindrome = "";

  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  for (let i = 1; i <= str.length; i++) {
    palindrome += str[str.length - i];
  }

  if (str == palindrome) {
    return true;
  }

  return false;
}

function arrayMaxMin(arr) {
  /* Seu código aqui */
  let arrReturn = [];
  let max = 0;
  arrReturn[0] = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arrReturn[0] > arr[i]) {
      arrReturn[0] = arr[i];
    } else if (max < arr[i]) {
      max = arr[i];
      arrReturn[1] = arr[i];
    }
  }
  return arrReturn;
}
