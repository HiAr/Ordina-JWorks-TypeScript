class Movie extends Item implements Rating {
    name: string;


    render(element: HTMLElement): void {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        h3.innerHTML = this.title;
        p1.innerHTML = "genre: " + this.genre;
        p2.innerHTML = this.description;
        p4.innerHTML = "rating : " + this.name;
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p4);
        article.appendChild(p3);

        element.appendChild(article);
    }


}