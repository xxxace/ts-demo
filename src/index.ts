import './helloworld';
import GameController from './modules/GameController'
import './assets/less/index.less'
let msg:string = "hello world"
console.log(msg);

const game:GameController = new GameController();
console.log(game)
