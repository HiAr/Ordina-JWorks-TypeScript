class Book extends Item {

    author : Author;
    render(element: HTMLElement): void {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        h3.innerHTML = this.title + " by " + this.author.name + " (" + this.author.age + ")";
        p1.innerHTML = "genre: " + this.genre;
        p2.innerHTML = this.description;
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);

        element.appendChild(article);

    }

}