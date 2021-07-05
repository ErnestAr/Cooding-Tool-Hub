
const saveTech = async (event) => {
  event.preventDefault()

  const cat = document.querySelector("#addtech")
  const techCat = cat.dataset.category
  const techId = cat.dataset.tech

  const response = await fetch('/category', {
    method: 'POST',
    body: JSON.stringify({  techId }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    saveCount(techId)
  } else {
    console.log("first stage");
    console.log(techId);
    document.location.replace(`/category/${techCat}`);
  }
};

const saveCount = async (techId) => {
  const response = await fetch(`/api/tech/${techId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    document.location.replace(`/account/page`);
  } else {
    console.log('second stage');
    document.location.replace(`/category/${techCat}`);
  }
}



document
  .querySelector('#addtech')
  .addEventListener('click', saveTech)



