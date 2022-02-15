import IAggregate from "../src/IAggregate";
import IIterator from "../src/IIterator";
import Book from "./Book";
import BookShelfIterator from "./BookShelfIterator";

export default class BookShelf implements IAggregate<Book> {
    private mBooks: Array<Book> = [];

    public get count(): number {
        return this.mBooks.length;
    }

    public addBook(book: Book) {
        this.mBooks.push(book);
    }

    public getBookAt(index: number): Book {
        return this.mBooks[index];
    }

    public iterator(): IIterator<Book> {
        return new BookShelfIterator(this);
    }
}
