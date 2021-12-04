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
        this.direction = this.keyMap[event.key.toLowerCase()]
    }
}

export default GameController;