export class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        if (typeof title !== "string" || title.length === 0) {
            console.log("Error: Invalid book title");
            return;
        }
        this._title = title;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        if (typeof author !== "string" || author.length === 0) {
            console.log("Error: Invalid author");
            return;
        }
        this._author = author;
    }

    get year() {
        return this._year;
    }

    set year(year) {
        if (typeof year !== "number" || year <= 0) {
            console.log("Error: Invalid year of publication");
            return;
        }
        this._year = year;
    }

    printInfo() {
        if (!this._title || !this._author || !this._year) {
            console.log("Warning: Some properties of the book are not set correctly.");
            return;
        }
        console.log(`Title: ${this._title}, Author: ${this._author}, Year of Publication: ${this._year}`);
    }

    static findOldestBook(books) {
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest), books[0]);
    }
}


export const book1 = new Book("How to Win Friends and Influence People", "Dale Carnegie", 1936);
export const book2 = new Book("The 7 Habits of Highly Effective People", "Stephen R. Covey", 1989);
export const book3 = new Book("How to Stop Worrying and Start Living", "Dale Carnegie", 1948);

console.log("Book 1 Desription:");
book1.printInfo();
console.log("Book 2 Description:");
book2.printInfo();
console.log("Book 3 Description:");
book3.printInfo();

export const book4 = new Book ("The Psychology of Money", "Morgan Housel", 2020);

console.log("Book 4 Description:");
book4.printInfo();

book4.title = "Atomic Habits";
book4.author = "James Clear";
book4.year = 2018;

book4.printInfo();

book4.title = null;
book4.author = 123;
book4.year = "year";

book4.printInfo();

book4.title = "";
book4.author = "";
book4.year = 0;

book4.printInfo();