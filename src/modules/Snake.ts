class Snake {
    el:HTMLElement
    head:HTMLElement
    bodies:HTMLCollectionOf<HTMLElement>

    constructor(){
        this.el = document.getElementById("snake")!;
        this.head = document.querySelector("#snake > div")!;
        this.bodies = this.el.getElementsByTagName("div");
    }

    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    get limitWidth(){
        return this.el.offsetParent?.clientWidth || 0;
    }

    get limitHeight(){
        return this.el.offsetParent?.clientHeight || 0;
    }

    set X(value:number){
        if(this.X !==value){
           
            if(this.bodies[1] && this.bodies[1].offsetLeft === value){
                if(this.X > value){
                    value = this.X + 10;
                }else{
                    value = this.X - 10;
                }
            }
       
            if(value<0 || value>= this.limitWidth){
                throw Error("Game Over!")
            }
            
            this.moveBody();
            this.head.style.left = value + 'px';
            this.checkBodyCollision();
        }
    }

    set Y(value:number){
        if(this.Y !==value){
            if(this.bodies[1] && this.bodies[1].offsetTop === value){
                if(this.Y > value){
                    value = this.Y + 10;
                }else{
                    value = this.Y - 10;
                }
            }

            if(value<0 || value>= this.limitHeight){
                throw Error("Game Over!")
            }
           
            this.moveBody();
            this.head.style.top = value + 'px';
            this.checkBodyCollision();
        }
    }
    
    addBody(){
        this.el.insertAdjacentHTML("beforeend","<div></div>");
    }

    moveBody(){
        try{
            for(let i = this.bodies.length - 1; i>0;i--){
                const body = this.bodies[i];
                const previous = body.previousElementSibling as HTMLElement;
                const X = previous.offsetLeft;
                const Y = previous.offsetTop;
                body.style.cssText = `top:${Y}px;left:${X}px;`
            }
        }catch(e){
            console.log(e)
        }
    }

    checkBodyCollision(){
        for(let i = 1; i<this.bodies.length; i++){
            const body = this.bodies[i];
           if(body.offsetLeft === this.X && body.offsetTop === this.Y){
               throw Error("身体碰撞！")
           }
        }
    }
}

export default Snake;