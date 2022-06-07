const usernameInput = document.getElementById('usernameInput');
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')


async function signUpValidation(event){
  event.preventDefault();

  const credentials = {
    username: usernameInput.value,
    firstname: firstNameInput.value,
    lastname: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }

  const response = await fetch('/api/users/',{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(credentials)
  })

  if(response.ok){
    document.location.replace('/dashboard');
  }else{
    const err = await response.json();
    const errMsg = err[0].message
    console.log(err,errMsg);
    customAlert(errMsg,'danger');
  }

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



document.getElementById("signUpSubmit").addEventListener("click", signUpValidation);
