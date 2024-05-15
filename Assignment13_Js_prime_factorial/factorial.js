function fnfactorial(n){
    var n = document.getElementById("txtfactorial").value;
    var textanswer = document.getElementById("textanswer");
    let answer = 1;
    if (n == 0 || n == 1){
      
      textanswer.textContent = "The factorial number of " + n + " is:" +answer;
      textanswer.style.color= "green";
    }
    if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
    }
      textanswer.textContent = "The factorial number of " + n + " is:" +answer;
      textanswer.style.color= "green";
      return true;
    }
