const list = document.querySelectorAll('#book-list ul');
const forms = document.forms;

// delete books 
link.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
  });

const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  const forms = document.forms;
console.log(forms);
console.log(forms['add-book']);

 const value = addForm.querySelector('input[type="text"]').value;
 const li = document.createElement('li');
 const bookName = document.createElement('span');
 const deleteBtn = document.createElement('span');

 bookName.textContent = value;
 deleteBtn.textContent = 'delete';

 li.appendChild(bookName);
 li.appendChild(deleteBtn);
 list.appendChild(li);
 //list.insertBefore(li, list.querySelector('li:first-child'));
});