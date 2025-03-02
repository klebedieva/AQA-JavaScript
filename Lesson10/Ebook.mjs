import { Book, book1, book2, book3, book4 } from "./Book.mjs";

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(fileFormat) {
        if (typeof fileFormat !== "string" || fileFormat.length === 0) {
            console.log("Error: Invalid File Format");
            return;
        }
        if (!fileFormat.startsWith('.')) {
            console.log("Error: File format must start with a dot (.)");
            return;
        }
        this._fileFormat = fileFormat;
    }

    printInfo() {
        super.printInfo();
        if (!this._fileFormat) {
            console.log("Warning: File format is not set correctly.");
            return;
        }
        console.log(`File Format: ${this._fileFormat}`);
    }

    static fromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}

const eBook1 = new EBook("The Power of Now: A Guide to Spiritual Enlightenment", "Eckhart Tolle", 1997, ".pdf");
const eBook2 = new EBook( "Deep Work: Rules for Focused Success in a Distracted World", "Cal Newport", 2016, ".docx");
const eBook3 = new EBook( "Essentialism: The Disciplined Pursuit of Less", "Greg McKeown", 2014, ".mobi");



console.log("Ebook 1 Description:");
eBook1.printInfo();
console.log("Ebook 2 Desription:");
eBook2.printInfo();
console.log("Ebook 3 Desription:");
eBook3.printInfo();

const eBook4 = EBook.fromBook(book4, ".txt");
console.log("Ebook 4 Desription:");
eBook4.printInfo();

eBook4.fileFormat = ".pdf";
eBook4.printInfo();

eBook4.fileFormat = undefined;
eBook4.printInfo();
 
eBook4.fileFormat = "pdf";
eBook4.printInfo();

const books = [book1, book2, book3, eBook1, eBook2, eBook3, eBook4];

const oldestBook = Book.findOldestBook(books);
console.log("Oldest book:");
oldestBook.printInfo(); 
