const list = document.querySelectorAll('#book-list ul');

// delete books 
link.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
  });