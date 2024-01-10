const biblioteca_service = require('../service/biblioteca.service.js');


function getBooks(req, res){
    const livros = biblioteca_service.getBooks()
    res.json(livros);
    
}

function addBook(req, res){
    const livros = req.body;
    try{
        biblioteca_service.addBook(livros);
        res.status(201).json({msg: "Livro adicionado com sucesso"});
    }
    catch(err){
        res.status(err.id).json({message: err.message});
    }

}



function updateBook(req,res){
    const ISBN = +req.params.ISBN
    let livroAtualizado = req.body;
    try{
        biblioteca_service.updateBook(ISBN, livroAtualizado);
        res.json({msg: "Livro atualizado com sucesso"});
    }
    catch(err){
        res.status(err.id).json({message: err.message});
    }

}

function deleteBook(req,res){
    const ISBN = +req.params.isbn;
    try{
        const livroDeletado = biblioteca_service.deleteBookById(ISBN);
        res.json(livroDeletado);
    } 
    catch (err) {      
        res.status(err.id).json({ message: err.message });
    }
}


module.exports = {
    addBook,
     getBooks,
     updateBook,
     deleteBook
}