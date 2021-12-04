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
        const top: number = (Math.round(Math.random() * 29) * 10);
        const left: number = (Math.round(Math.random() * 29) * 10);

        if(top!==null||top!==undefined){
            this.element.style.cssText = `top:${top}px;`
        }
        if(left!==null||left!==undefined){
            this.element.style.cssText += `left:${left}px;`
        }
    }
}

export default Food