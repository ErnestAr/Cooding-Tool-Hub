const saveTech = async (event) => {
  event.preventDefault()

  const techCat = event.target.dataset.category
  const techId = event.target.dataset.tech

  const response = await fetch('/category', {
    method: 'POST',
    body: JSON.stringify({ techId }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    console.log('save count response ok')
    updateSaveCount(techId)
  } else {
    console.log('we here')
    document.location.replace(`/category/${techCat}`);
  }
};

const updateSaveCount = async (techId) => {
  const response = await fetch(`/api/tech/${techId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    document.location.replace(`/account/page`);
  } else {
    document.location.replace(`/category/${techCat}`);
  }
}

// const checkUserId = async (event) => {
//   event.preventDefault()
//   const creatorUserId = event.target.dataset.creatorUserId
// }


saveBtn = document.querySelectorAll('.addtech')
saveBtn.forEach((button) => {
  button.addEventListener('click', saveTech)
})


