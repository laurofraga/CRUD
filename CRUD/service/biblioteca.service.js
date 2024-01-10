const bibliotecaRepository = require('../repository/biblioteca.repository.js');

function addBook(livro){
    if (!livro.titulo || !livro.autor || !livro.editora || !livro.anoPublicacao) {
        throw { id: 400, message: "Todos os campos são obrigatórios" };
    }
    else{
        bibliotecaRepository.addBook(livro);
    }
}

function getBooks(){
    return bibliotecaRepository.getBooks();
}

function updateBook(isbn, livroAtualizado ){
    const livros = bibliotecaRepository.getBooks(isbn);
    if(!livros){
        throw {id:404, message:"Livro não encontrado"};
    }
    if(livroAtualizado.titulo && livroAtualizado.autor && livroAtualizado.editora && livroAtualizado.anoPublicacao){
        bibliotecaRepository.updateBook(livroAtualizado);
    }
    else{
        throw {id:400, message:"Todos os campos são obrigatórios"};
    }
}

function deleteBookById(isbn){
    const livroDeletado = bibliotecaRepository.deleteBook(isbn);
    if(livroDeletado){
        return livroDeletado;
    } 
    else{
        throw {id:404, message:"Livro não encontrado"};
    }

}

module.exports = {
    addBook, 
    getBooks, 
    updateBook,
    deleteBookById
}