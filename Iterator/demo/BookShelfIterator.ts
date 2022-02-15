import IIterator from "../src/IIterator";
import Book from "./Book";
import BookShelf from "./BookShelf";

export default class BookShelfIterator implements IIterator<Book> {
    private mBookShelf: BookShelf;
    private iterateIndex: number;

    constructor(shelf: BookShelf) {
        this.mBookShelf = shelf;
        this.iterateIndex = 0;
    }

    hasNext(): boolean {
        return this.iterateIndex < this.mBookShelf.count;
    }

    next(): Book {
        return this.mBookShelf.getBookAt(this.iterateIndex++);
    }

}
