const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')


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
      customAlert("login failed", 'danger');
    }

  })
  .catch((error) => {
    console.log('Error:', error);
    customAlert("login failed", 'danger');
  });

}

const customAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


document.getElementById("loginSubmit").addEventListener("click", loginValidation);
