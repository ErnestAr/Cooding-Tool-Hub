const contelements = document.getElementsByClassName("saved");

const addTech = async (event) => {
    event.preventDefault()
    const techName = document.querySelector('#tech-name')
    const techDesc = document.querySelector('#tech-desc')
    const techProject = document.querySelector('#tech-project')
    const category = document.querySelector('#tech-category')
  
    if (techName && techDesc && techProject && category) {
      // we can change this to the route later, this is a placeholder
      const response = await fetch('/api/tech', {
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



document
  .querySelector('#delete-tech')
  .addEventListener('click', deleteTech)


document
.querySelector('.add-tech-form')
.addEventListener('submit', addTech)

