let livros = [];
let ISBN = 1;


function geraISBN(){
    return ISBN++;
}

 //create
function addBook(livro){
    livro.titulo = livro.titulo;
    livro.isbn = geraISBN();
    livro.autor = livro.autor;
    livro.editora = livro.editora;
    livro.anoPublicacao = livro.anoPublicacao;
    livros.push(livro);
}
//read
function getBooks(){
    return livros;
}
//update
function updateBook(livro){
    for(let i in livros ){
        if(livros[i].isbn == livro.isbn){
            livros[i].titulo = livro.titulo;
            livros[i].autor = livro.autor;
            livros[i].editora = livro.editora;
            livros[i].anoPublicacao = livro.anoPublicacao;
            return;
        }
    }
}

//delete
function deleteBook(isbn){
    for(let i in livros){
        if(livros[i].isbn === isbn){
            return livros.splice(i,1)[0];
        }      
    }
}
    
module.exports = {
    addBook, 
    getBooks, 
    updateBook, 
    deleteBook}