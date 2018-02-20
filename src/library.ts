class Library {
    items : Array<Item> = new Array<Item>();

    constructor() {
        let bookGood = new Book();
        let bookBad = new Book();
        let movieGood = new Movie();
        let movieBad = new Movie();
        bookGood.description = "Een goed boek";
        bookBad.description = "Een slecht boek";
        movieGood.description = "Een goede film";
        movieBad.description = "Een slechte film";

        bookGood.title = "Clean code";
        bookBad.title = "50 shades of Grey";
        movieGood.title = "Hitchhikers' guide to the galaxy";
        movieBad.title = "Bad boys 2";

        bookGood.genre = "IT";
        bookBad.genre = "Romance";
        movieGood.genre = "Absurd";
        movieBad.genre = "Action";

        bookGood.author = new Author(60, "Robert C Martin");
        bookBad.author = new Author(7,"Who gives?");

        movieGood.name = "Good rating";
        movieBad.name = "Bad rating";
        this.items.push(bookGood, bookBad, movieGood, movieBad);
    }

    output() : void {
        for (let entry of this.items) {
            entry.render(document.getElementById("items"));
        }
    }
}