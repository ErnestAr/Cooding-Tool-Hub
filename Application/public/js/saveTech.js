//////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////
// delete a tech from created user table
const deleteTech = async (event) => {
  event.preventDefault()
  // route is a place holder
  const response = await fetch('/api/users/tech/:id', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    // route is a placeholder
    document.location.replace('/users/tech')
  } else {
    alert('Failed to save')
  }
};
document
  .querySelector('#delete-tech')
  .addEventListener('click', deleteTech)

/////////////////////////////////////////////////////////////////
// adds tech to the user table
const addTech = async (event) => {
  event.preventDefault()
  const techName = document.querySelector('#tech-name')
  const techDesc = document.querySelector('#tech-desc')
  const techProject = document.querySelector('#tech-project')
  const category = document.querySelector('#tech-category')

  if (techName && techDesc && techProject && category) {
    // we can change this to the route later, this is a placeholder
    const response = await fetch('/api/techs/new', {
      method: 'POST',
      body: JSON.stringify({ techName, techDesc, techProject, category }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      // route is a placeholder
      document.location.replace('/user/tech')
    } else {
      alert('Failed to create new post')
    }
  }
};
document
  .querySelector('.add-tech-form')
  .addEventListener('submit', addTech)
