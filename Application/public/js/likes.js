const addLike = async (event) => {
  event.preventDefault()
  const techName = document.querySelector('#tech-name')

  if (techName) {
    // we can change this to the route later, this is a placeholder
    const response = await fetch(`/api/tech/${techid}/addlike`, {
      method: 'PUT',
      body: JSON.stringify({ techName, techDesc, techProject, category }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      // route is a placeholder
      document.location.replace('/user/tech')
    } else {
      alert('Failed to add like')
    }
  }
};

document
.querySelector('.add-like')
.addEventListener('click', addLike)