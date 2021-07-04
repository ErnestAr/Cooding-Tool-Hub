
const addTech = async (event) => {
    event.preventDefault()
    const techTitle = document.querySelector('#title').value.trim()
    const techDesc = document.querySelector('#desc').value.trim()
    const techLanguage = document.querySelector("#language").value
    const techProject = document.querySelector('#project').value.trim()
    const techCategory = document.querySelector('#category').value
    const techSource = document.querySelector('#source').value.trim()
      // we can change this to the route later, this is a placeholder
      const response = await fetch('/api/tech', {
        method: 'POST',
        body: JSON.stringify({ techTitle, techDesc, techProject, techCategory, techLanguage, techSource }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        document.location.replace('/account/page')
      } else {
        alert('Failed to save')
      }
  };
  document
  .querySelector('#contact-submit')
  .addEventListener('click', addTech)
