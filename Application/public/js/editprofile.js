

const saveProfile = async () => {
    const email = document.querySelector("#useremail").value.trim()
    const username = document.querySelector("#username").value.trim()
    const password = document.querySelector("#userpassword").value.trim()
    const response = await fetch(`api/users/edit`, {
      method: 'PUT',
      body: JSON.stringify( { email, username, password }),
      headers: { 'Content-Type': 'application/json' },
      
    });
    if (response.ok) {
        document.location.replace('/account/page')
        
    }
  }

document
.querySelector('#savechanges')
.addEventListener('click', saveProfile)

