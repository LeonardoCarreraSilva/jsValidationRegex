function verify(field) {
  switch (field) {
    case "email":
      validateEmail();
      break;
    case "user":
      validateUser();
      break;

    case "password":
      validatePassword();
      break;
  }
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("emailError").style.display = "block";
  } else {
    document.getElementById("email").style.borderColor = "green";
    document.getElementById("emailError").style.display = "none";
  }
}

function validateUser() {
  var user = document.getElementById("user").value;
  var userRegex = /\s/;
  if (userRegex.test(user)) {
    document.getElementById("user").style.borderColor = "red";
    document.getElementById("userError").style.display = "block";
  } else {
    document.getElementById("user").style.borderColor = "green";
    document.getElementById("userError").style.display = "none";
  }
}

function updatePasswordStrength(password) {
  const strengthBar = document.getElementById('passwordStrength');
  const capitalLetters = (password.match(/[A-Z]/g) || []).length;
  const symbols = (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
  const hyphens = (password.match(/-/g) || []).length;
  
  let strength = 0;
  
  // Calculate strength percentage
  if (capitalLetters >= 5) strength += 33;
  if (symbols >= 6) strength += 33;
  if (hyphens >= 2) strength += 34;
  
  // Update progress bar
  strengthBar.style.width = strength + '%';
  
  // Update color based on strength
  if (strength < 33) {
      strengthBar.className = 'progress-bar bg-danger';
  } else if (strength < 66) {
      strengthBar.className = 'progress-bar bg-warning';
  } else {
      strengthBar.className = 'progress-bar bg-success';
  }
}

function validatePassword(){
  var password = document.getElementById("password").value;
  updatePasswordStrength(password);
  var passwordRegex = /^(?=(?:.*[A-Z]){5})(?=(?:.*[!@#$%^&*]){6})(?=(?:.*-){2})[A-Z!@#$%^&*-]{13}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("passwordError").style.display = "block";
  } else {
    document.getElementById("password").style.borderColor = "green";
    document.getElementById("passwordError").style.display = "none";
  }
}

