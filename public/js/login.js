const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');


function loginValidation(event){
  event.preventDefault();

  const credentials = {
    username: usernameInput.value,
    password: passwordInput.value
  }

  fetch('/api/users/login',{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if(data.loggedIn){
      document.location.replace('/dashboard');
    }else{
      // TODO: create more graceful login failure
      alert("login failed!");
    }

  })
  .catch((error) => {
    console.error('Error:', error);
  });

}


document.getElementById("loginSubmit").addEventListener("click", loginValidation);
