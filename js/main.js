// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn')
let confirmInput = document.getElementById('confpass');

//Array
let membersArray = loadmembersArray();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let membUser = document.getElementById('user').value;
  let membPass = document.getElementById('pass').value;
  checkUser(membUser, membPass);
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let membersArrayUserLog = document.getElementById('username').value;
  let membersArrayPassLog = document.getElementById('password').value;
  for (let i = 0; i < membersArray.length; i++) {
    if (membersArrayUserLog === membersArray[i].membUser && membersArrayPassLog === membersArray[i].membPass) {
      alert("Login Successful");
      return -100;
    } else {
    }
  }
  alert("Invalid User or Password");
}


function savemembersArray() {
  localStorage.setItem('membersArray', JSON.stringify(membersArray));
}

function loadmembersArray() {
  let membersArrayStr = localStorage.getItem('membersArray');
  return JSON.parse(membersArrayStr) ?? [];
}

function newmembersArray(membersArrayUser, membersArrayPass) {
  return {
    membUser: membersArrayUser,
    membPass: membersArrayPass,
  }
}

function checkUser(user, pass) {
  for (let i = 0; i < membersArray.length; i++) {
    if (user === membersArray[i].membUser) {
      alert("Username already in use")
      return -100;
    }
  }
  membersArray.push(newmembersArray(user, pass));
  alert("Sign Up Successful")
  savemembersArray();
  loadmembersArray();
}