const ul = document.querySelector('.booksList ul');
const forms = document.forms;

//load books
function loadBooks() {
    
    let listBooks = data;
    ul.innerHTML = '';
    for (let i = 0; i < listBooks.length; i++) {
        let book = listBooks[i];
        readBook(book.name, book.completed);
    }
}
loadBooks();
//read book 
function readBook(inputValue, completed) {
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteButton = document.createElement('span');

    //add text content
    bookName.textContent = inputValue ;
    deleteButton.textContent = 'delete';

    // add class
    bookName.classList.add('booksList__name');
    deleteButton.classList.add('booksList__delete');

    //add to DOM
    li.appendChild(bookName);
    li.appendChild(deleteButton);


    if (completed) {
        li.classList.add('completed');
    }

    ul.appendChild(li);

    li.addEventListener('click',toggleFinal);

    //reset input
    document.querySelector('.booksAdd input').value = '';
}

//check remove complete 
function toggleFinal() {
    if (this.classList.contains('completed')) {
        this.classList.remove('completed');
    } else {
        this.classList.add('completed');
    }
}

//delete book 
ul.addEventListener('click' , (e)=>{
    if (e.target.className == 'booksList__delete') {
        const dadOfLi = e.target.parentElement;
        dadOfLi.parentNode.removeChild(dadOfLi);
    }
});

//add book 
const addForm = forms['booksAdd'];
addForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const input = e.target.querySelector('input');

    if(input.trim() == ' '){
        alert("Vui lòng nhập lại !!");
    }
    else {
        readBook(input, false);
    }
})

//filter book (search)
const search = forms['books__search'];
search.addEventListener('keyup', (e)=>{  //keyup event: convert input to upperCase
    e.preventDefault();

    const input = search.querySelector('input');
    const filter = input.value.toUpperCase;
    const li = ul.querySelectorAll('li'); //all items

    for(let i =0; i<li.length;i++){
        const span = li[i].querySelector('.booksList__name');
        const name = span.textContent;
        if (name.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ' ';
        } else {
            li[i].style.display = 'none';
        }
    }
});