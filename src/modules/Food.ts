class Food{
    element: HTMLElement;
    constructor(){
        this.element = document.getElementById("food")!;
    }

    get X(){
        return this.element.offsetLeft
    }
    
    get Y(){
        return this.element.offsetTop
    }

    random(){
        let styleText:string = "";
        const top: number = (Math.round(Math.random() * 29) * 10);
        const left: number = (Math.round(Math.random() * 29) * 10);
        this.element.style.cssText =  `top:${top}px;left:${left}px;`;
    }
}

export default Food