function verify(field) {
  if (field == "email") {
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    if (!emailRegex.test(email)) {
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("emailError").style.display = "block";
    }else{
      document.getElementById("email").style.borderColor = "green";
      document.getElementById("emailError").style.display = "none";
    }
  }
}

function verifyField(field, value){
  // TODO: Implementar lógica para verificar o campo generico
  
}
