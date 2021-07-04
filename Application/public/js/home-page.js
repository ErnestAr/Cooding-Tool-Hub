// Get all the tech in the category
const contelements = document.getElementsByClassName("card");


for (let i = 0; i < contelements.length; i++) {
  contelements[i].addEventListener('click', openCategory, false);
}