

function Book(title="Un-known", numOfChapters=0, author="Un-Known", numOfPages=0, publisher="Un-Known", numOfCopies=0) {
    this.title=title;this.numOfChapters=numOfChapters;
    this.author=author;this.numOfPages=numOfPages;
    this.publisher=publisher;this.numOfCopies=numOfCopies;
};


Box.containedBooksNumber = 0;

function Box(heightVal=0, widthVal=0, lengthVal=0, materialVal="Cartona", content=[]) {
    var height=heightVal, width=widthVal, length=lengthVal;
    var material=materialVal, boxContents=[];

    this.removeBookByTitle = function(title) {
        if(boxContents.length === 0) {throw new Error("The Box is Empty!")}
        for(let indx = 0; indx < boxContents.length; indx++) {
            if(title === boxContents[indx].title) {
                boxContents.splice(indx, 1);
                return;
            }
        }
        throw new Error("No Book With That title!");
    }

    this.addBook = function(bookObj) {
        if(bookObj.constructor.name !== "Book"){throw new Error("This Box contains only Books!")}
        boxContents.push(bookObj);
        Box.containedBooksNumber += 1;
    }

    this.getTopBook = function() {
        if(boxContents.length === 0) {throw new Error("The Box is Empty!")}
        return boxContents.pop();
    }

    this.countBooks = function() {
        return boxContents.length;
    }

    this.bookDetails = function() {
        console.log("Dimentions: H = " + height + " L = " + length + " W = " + width);
        console.log("Material: " + material);
        
        let booksTitles = "";
        for(let indx = 0; indx < boxContents.length; indx++) {
            booksTitles += boxContents[indx].title + " ";
        }
        console.log("Books: " + (!(booksTitles) ? "Empty" : booksTitles));
    }

    const _fillBox = function() {
        for(let indx = 0; indx < content.length; indx++) {
            if(content[indx].constructor.name !== "Book"){throw new Error("This Box contains only Books!")}
            boxContents.push(content[indx]);
        }
        Box.containedBooksNumber += boxContents.length;
    }
    _fillBox();
};

