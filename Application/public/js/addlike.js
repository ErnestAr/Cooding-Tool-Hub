const addLike = async (event) => {
  event.preventDefault()
  // placeholder
  const techId = document.getElementById('tech-card')
  const elId = dataset.techId

  const response = await fetch(`/api/tech/${techid}/addlike`, {
    method: 'PUT',
    body: JSON.stringify({ techName, techDesc, techProject, category }),
    headers: { 'Content-Type': 'application/json' }
  });
}


document
.querySelector('.add-like')
.addEventListener('click', addLike)