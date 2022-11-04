// class
class Genshin {
#section;
    constructor(main, AR) {
    this.main = main;
    this.AR = AR;
    }

setSection = (section) => {
    this.#section = section;
}

getSection = () => {
    return this.#section;
}

bookSection = () => "Japanese Book - " .concat(this.#section + this.title)
}

class Book extends Manga {
    constructor (title, writer, type) {
        super(title, writer, '', '');
        this.title = title;
        this.writer = writer;
        this.type = type;
    }

}

let japanese = new Manga('Japanese', )