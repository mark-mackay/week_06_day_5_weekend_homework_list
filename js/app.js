document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const comedianListItem = createComedianListItem(event.target);
  const comedianList = document.querySelector('#comedian-list');
  comedianList.appendChild(comedianListItem);

  event.target.reset();
}

const createComedianListItem = function (form) {
  const comedianListItem = document.createElement('li');
  comedianListItem.classList.add('comedian-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  comedianListItem.appendChild(name);

  const nationality = document.createElement('h3');
  nationality.textContent = form.nationality.value;
  comedianListItem.appendChild(nationality);

  const type = document.createElement('p');
  type.textContent = form.type.value;
  comedianListItem.appendChild(type);

  const gender = document.createElement('p');
  gender.textContent = form.gender.value;
  comedianListItem.appendChild(gender);

  if (form.checkbox.checked) {
    comedianListItem.classList.add('unclean');
  }

  return comedianListItem;
}

const handleDeleteAllClick = function (event) {
  const comedianList = document.querySelector('#comedian-list');
  comedianList.innerHTML = '';
}
