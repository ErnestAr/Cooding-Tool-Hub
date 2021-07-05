// get tech saved count
const getTechSavedCount = async => {
  const techId = document.getElementById('tech-card')
  const elId = dataset.techId
  const response = await fetch(`/api/tech/${elId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
};
// on window load run the function above
window.onload(getTechSavedCount)

// save tech to user's table
const saveTech = async (event) => {
  event.preventDefault()
  const techId = document.getElementById('tech-card')
  const elId = dataset.techId
  // route
  const response = await fetch(`/api/tech/${techId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  });
};

document
  .querySelector('#save-tech')
  .addEventListener('click', saveTech)



