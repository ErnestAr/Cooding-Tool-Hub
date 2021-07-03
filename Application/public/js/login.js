
const switchers = [...document.querySelectorAll('.switcher')]
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/category');
    } else {
      document.location.replace('/login');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#signup-username').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/category');
    } else {
      alert('Failed to sign up.');
    }
  }
};




switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


document
  .querySelector('.form-login')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.form-signup')
  .addEventListener('submit', signupFormHandler);
