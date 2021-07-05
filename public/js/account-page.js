

// delete a tech from created user table
const deleteTech = async (event) => {
  event.preventDefault();
  const currentId = document.querySelector(".form-group").getAttribute("id")
    const response = await fetch(`/api/tech/${currentId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  if (response.ok) {
    document.location.replace('/account')
  } else {
    alert('Failed to save')
  }
};

const editProfile = (event) => {
  document.location.replace("/account/editprofile")
  
}

const addTech = (event) => {
  document.location.replace("/account/addnew")
  
}


// document
//   .querySelector('#delete-tech')
//   .addEventListener('click', deleteTech)

document
  .querySelector('#editprofile')
  .addEventListener('click', editProfile)


  document
  .querySelector('#addtech')
  .addEventListener('click', addTech)




