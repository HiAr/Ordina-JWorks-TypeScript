abstract class Item {
    title: string;
    genre: string;
    description : string;
    abstract render(element : HTMLElement) :void ;
}
