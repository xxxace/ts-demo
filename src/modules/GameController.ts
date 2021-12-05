import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

interface IKeyMap {
    [key:string]:any
}

class GameController{
    snake:Snake
    food:Food
    scorePanel:ScorePanel
    gameOver:boolean=false
    timer?:NodeJS.Timeout
    direction:string = ''
    keyMap:IKeyMap = {
        "arrowup":"up",
        "arrowdown":"down",
        "arrowleft":"left",
        "arrowright":"right",
        "up":"up",
        "down":"down",
        "left":"left",
        "right":"right"
    }

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init(){
        document.addEventListener("keydown",this.keydownHandler.bind(this))
    }

    keydownHandler(event:KeyboardEvent){
        const direction = this.keyMap[event.key.toLowerCase()]
        if(direction){
            this.direction = direction;
            this.move();
        }
    }

    move(){
        if(this.gameOver)return
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch(this.direction){
            case "up":
                Y-=10;
                break
            case "down":
                Y+=10;
                break
            case "left":
                X-=10;
                break
            case "right":
                X+=10;
                break
        }
        
        this.isOverFood(X,Y)

        try{
            this.snake.X = X;
            this.snake.Y = Y;
            this.timer&&clearTimeout(this.timer);
            this.timer = setTimeout(()=>this.move(),300 - (this.scorePanel.level - 1) * 30);
        }catch(e){
            this.gameOver = true;
            console.log("Game Over!");
        }
    }

    isOverFood(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            this.scorePanel.addScore();
            this.food.random();
            this.snake.addBody();
            return true;
        }
        return false;
    }
}

export default GameController;