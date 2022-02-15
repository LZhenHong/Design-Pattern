import Book from "./Book";
import BookShelf from "./BookShelf";

export default abstract class Main {
    public static run() {
        let shelf = new BookShelf();
        shelf.addBook(new Book("Around the World in 80 Days"));
        shelf.addBook(new Book("Bible"));
        shelf.addBook(new Book("Cinderella"));
        shelf.addBook(new Book("Daddy-Long-Legs"));

        let it = shelf.iterator();
        while (it.hasNext()) {
            let book = it.next();
            console.log(book.name);
        }
    }
}
