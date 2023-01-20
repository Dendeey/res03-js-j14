import { User } from "./classes/user.js";
import { Book } from "./classes/book.js";
 
  
window.addEventListener("DOMContentLoaded", function(){  
    
    let book1 = new Book(1, "Oui-oui", "Enid Blyton", "2011", "6", "extrait du book 1", "https://static.fnac-static.com/multimedia/Images/FR/NR/c6/66/2b/2844358/1540-1/tsp20230101062641/Oui-Oui-prend-les-commandes.jpg");
    let book2 = new Book(2, "SNK", "Hajime Isayama", "2012", "102", "extrait du book2", "https://www.pika.fr/sites/default/files/images/livres/couv/9782811611699-T.jpg");
    let book3 = new Book(3,"Ki & Hi", "Kévin Tran", "2018", "86", "extrait du book3", "https://static.fnac-static.com/multimedia/Images/FR/NR/59/9f/7c/8167257/1507-1/tsp20221011063739/Ki-Hi-tome-1-Deux-freres.jpg");
    
    let user1 = new User(1, "Arnold", "arnaud@gmail.com", "motdepasse1", "Arnaud", "Dupon", "profile image1");
    let user2 = new User(2, "Antho", "antho@gmail.com", "motdepasse2", "Anthony", "Turpin", "profile image2");
    let user3 = new User(3, "CR7", "cr7@gmail.com", "motdepasse3", "Cristiano", "Ronaldo", "profile image3");
    
    let bookArray = [];
    let userArray = [];
    
    bookArray.push(book1, book2, book3);
    userArray.push(user1, user2, user3);
    
    console.log(bookArray);
    console.log(userArray);
    
    sessionStorage.setItem("books", "bookArray");
    sessionStorage.setItem("user", "userArray");
    
});