
function fnValidate(){
         debugger;   
         var name = document.getElementById("txtName");
         var rollno = document.getElementById("txtRollNo");
         var txterrorName = document.getElementById("txterror-name");
         var txterrorRollNo = document.getElementById("txterror-rollno");
     
    if(name.value == ""){
        txterrorName.textContent ="Please enter the student Name"
        return false;
    }
    
    else if(!name.value.charAt(0).match(/[a-z]/i)){
        txterrorName.textContent = "Please enter the alphabet"
        return false;
    }
    else{
        txterrorName.textContent = "";
    }
    if(rollno.value == ""){
        txterrorRollNo.textContent = "Please enter the student roll No";
        return false;
    }
    
    else{
        txterrorRollNo.textContent = "";
    }
    
   return true;
}

function fnClearFields(){
    var name = document.getElementById("txtName");
    var rollno = document.getElementById("txtRollNo");
    var txterrorName = document.getElementById("txterror-name");
    var txterrorRollNo = document.getElementById("txterror-rollno");

    name.value = "";
    rollno.value = "";
    txterrorName.textContent = "";
    txterrorRollNo.textContent = "";
}