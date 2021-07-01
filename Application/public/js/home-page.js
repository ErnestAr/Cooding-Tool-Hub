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
  const response = await fetch('/category', {
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



