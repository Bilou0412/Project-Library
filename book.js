
const theHobbit = new book("The Hobbit","J.R.R. Tolkien","296","not read yet");
const theHobbit2 = new book("The Hobbit","J.R.R. Tolkien","295","not read yet");
let myLibrary = [theHobbit,theHobbit2];

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
    return console.log(this.info());
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayMyLibrary(){
    const bodyClass =document.querySelector('.body')
    for(i = 0 ;i < myLibrary.length ;i++){
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<ul><li>Titre : ${myLibrary[i].title}</li><li>Auteur : ${myLibrary[i].author}</li><li>Pages :${myLibrary[i].pages}</li><li>Lu :${myLibrary[i].read}</li></ul>`
        bodyClass.appendChild(div)
    }
}



const body = document.querySelector('body');

function openForm(){
    const div = document.createElement('div');
    div.classList.add('form');
    div.innerHTML = '<form action=""><fieldset><legend>BOOK</legend><div class="close">❌</div><label for="titre">Titre</label><input type="text" id="titre" name="title"><label for="auteur">Auteur</label><input type="text" id="auteur" name="author"><label for="pages">Pages</label><input type="number" id="pages" name="pages"><label for="lu">Lu</label><input type="text" id="lu" name="read"><button>Valider</button></fieldset></form>';
    body.appendChild(div);
    const cross = document.querySelector('.close')
    cross.addEventListener('click',function(){
        closeForm();
    })  
}

function closeForm(){
    const div = document.querySelector('.form')
    body.removeChild(div);
}

const btnOpenForm = document.querySelector('.body > .btn');

btnOpenForm.addEventListener('click',function(){
    openForm();
});







