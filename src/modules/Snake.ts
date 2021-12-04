class Snake {
    el:HTMLElement
    head:HTMLElement
    bodies:HTMLCollection

    constructor(){
        this.el = document.getElementById("snake")!;
        this.head = document.querySelector("snake > div")!;
        this.bodies = this.el.getElementsByTagName("div");
    }

    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    set X(value:number){
        this.head.style.left = value + 'px';
    }

    set Y(value:number){
        this.head.style.top = value + 'px';
    }
    
    addBody(){
        this.el.insertAdjacentHTML("beforeend","<div></div>");
    }
}

export default Snake;