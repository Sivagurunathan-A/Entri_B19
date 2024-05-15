function fnSubmit() {
    var n = document.getElementById("txtprime").value;
    var texterror = document.getElementById("txterror-prime");
    // Check if the number is equal to 1, which is not a prime number
    if(n == ""){
        texterror.textContent = "Please enter a number"
        texterror.style.color ="red";
    }
    else if (n === 1) {
      return false;
    }
    // Check if the number is equal to 2, which is a prime number
    else if (n === 2) {
      return true;
    } else {
      // Iterate from 2 to n-1 to check for factors of n
      for (var x = 2; x < n; x++) {
        // If n is divisible by x without a remainder, it is not a prime number
        if (n % x === 0) {
            texterror.textContent = "Entered number " + n + " is not prime number"
            texterror.style.color ="red";
          return false;
        }
      }
      // If no factors are found, the number is a prime number
      texterror.textContent = "Entered number " + n + "  is a prime number"
      texterror.style.color ="green";
      return true;  
    }
  }
  