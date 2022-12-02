let myLibrary = [];

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

book.prototype.changeRead = function(){
    if(this.read == "oui"){
        this.read = "non"
    }else{
        this.read = "oui"
    }
    clearCard();
    displayMyLibrary();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    clearCard();
    displayMyLibrary();
}
function clearCard(){
    const bodyClass =document.querySelector('.body');
    bodyClass.innerHTML = '';
}
function displayMyLibrary(){
    const bodyClass =document.querySelector('.body');
    for(i = 0 ;i < myLibrary.length ;i++){
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<ul><li>Titre<br><em>${myLibrary[i].title}</em></li><li>Auteur<br><em>${myLibrary[i].author}</em></li><li>Pages<br><em>${myLibrary[i].pages}</em></li><li>Lu<br><em><button class="read" onclick="myLibrary[${i}].changeRead();">${myLibrary[i].read}</button></em></li></ul><button class="delete" data-index = "${i}" onclick="deleteCard(${i});">Supprimer</button>`
        bodyClass.appendChild(div);
    }
}

const body = document.querySelector('body');

function deleteCard(index){
    myLibrary.splice(index,1);
    clearCard();
    displayMyLibrary();
}

function openForm(){
    const div = document.createElement('div');
    div.classList.add('form');
    div.innerHTML = '<form action=""><fieldset><legend>BOOK</legend><div class="close">❌</div><label for="titre">Titre</label><input type="text" id="titre" name="title" required><label for="auteur" >Auteur</label><input type="text" id="auteur" name="author" required><label for="pages" >Pages</label><input type="number" id="pages" name="pages"required><label for="lu">Lu</label><select id="lu"><option value="oui">oui</option><option value="non" selected>non</option></select><button type="submit">Valider</button></fieldset></form>';
    body.appendChild(div);
    const cross = document.querySelector('.close')
    const submitFormBtn = document.querySelector('.form > form > fieldset > button')
    submitFormBtn.addEventListener('click',function(e){
        getValue();
        closeForm();
    })
    cross.addEventListener('click',function(){
        closeForm();
    })  
}

function closeForm(){
    const div = document.querySelector('.form')
    body.removeChild(div);
}

function getValue(){
    let title = document.getElementById('titre').value;
    let author = document.getElementById('auteur').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('lu').value;
    let newBook = new book(title,author,pages,read);
    addBookToLibrary(newBook);
}

const btnOpenForm = document.querySelector('.btn');

btnOpenForm.addEventListener('click',function(){
    openForm();
});








