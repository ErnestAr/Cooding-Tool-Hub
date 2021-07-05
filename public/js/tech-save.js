// get tech saved count
// const getTechSavedCount = async (event) => {
//   event.preventDefault()
//   const techId = document.getElementById('addtech')
//   const elId = dataset.techId
//   const response = await fetch(`/api/tech/${elId}`, {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' }
//   })
// };
// // on window load run the function above
// window.onload(getTechSavedCount)

// save tech to user's table
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



