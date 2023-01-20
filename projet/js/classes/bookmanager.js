import { Book } from "./book.js";

class BookManager{
    
    #books;
    
    constructor(books){
        
        this.#books = [];
        
    }
    
    get(){
        
        return this.#books;
    }
    
    set books (books){
        
        this.#books = books;
        
    }
    
    findAllBooks(){
        
    }
    
    findBookById(id){
        
    }
    
    findBooksByTitle(title){
        
    }
    
    findBooksByAuthor(author){
        
    }
    
    findBooksByPublicationYear(year){
        
        
    }
    
    createBook(book){
        
    }
    
    deleteBook(bookId){
        
    }
    
    editBook(book){
        
    }
    

    save(){
        
        sessionStorage.setItem("saveBook", JSON.stringify(this.#books));
        
    }
    
    load(){
        
        for(let i = 0; i < this.#books.length; i++)
        {
            let books = new Book(recupBookTab[i].id, recupBookTab[i].title, recupBookTab[i].author, recupBookTab[i].publicationDate, recupBookTab[i].totalPages, recupBookTab[i].excerpt, recupBookTab[i].coverImage);
            
            console.log(books);
        }
        
    }
    
}

export { BookManager };