// Get all the tech in the category
const contelements = document.getElementsByClassName("card");
const openCategory =   (e) => {
    let currentPost = e.currentTarget
    console.log(currentPost);
    const currentId = currentPost.getAttribute("id")
    console.log(currentId);
    document.location.replace(`/category/${currentId}`)
}


// save tech to user's table
const saveTech = async (event) => {
  event.preventDefault()
  // route is a place holder
  const response = await fetch('/api/users/tech/:id', {
    method: 'POST',
    body: JSON.stringify({ techName, techDesc, techProject, category }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    // route is a placeholder
    document.location.replace('/users/saved')
  } else {
    alert('Failed to save')
  }
};


document
  .querySelector('#save-tech')
  .addEventListener('click', saveTech)
for (let i = 0; i < contelements.length; i++) {
  contelements[i].addEventListener('click', openCategory, false);
}

////////////////////////////////////////////////////////////////
// delete a tech from created user table
// const deleteTech = async (event) => {
//   event.preventDefault()
//   // route is a place holder
//   const response = await fetch('/api/users/tech/:id', {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' }
//   });

//   if (response.ok) {
//     // route is a placeholder
//     document.location.replace('/users/tech')
//   } else {
//     alert('Failed to save')
//   }
// };
// document
//   .querySelector('#delete-tech')
//   .addEventListener('click', deleteTech)

/////////////////////////////////////////////////////////////////



