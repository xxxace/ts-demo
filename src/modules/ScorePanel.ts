class ScorePanel {
    score = 0
    level = 1
    maxLevel = 10
    scoreEl: HTMLElement
    levelEl: HTMLElement

    constructor(){
        this.scoreEl = document.getElementById("score")!;
        this.levelEl = document.getElementById("level")!;

        this.updateScore(this.score);
        this.updateLevel(this.level);
    }

    addScore(){
        ++this.score
        this.updateScore(this.score);
        if(this.score % 10 === 0){
            this.levelUp();
        }
    }

    levelUp(){
        if(this.level<this.maxLevel){
            ++this.level;
            this.updateLevel(this.level);
        }
    }

    updateScore(score:number){
        this.scoreEl.innerHTML = (score).toString();
    }

    updateLevel(level:number){
        this.levelEl.innerHTML = (level).toString();
    }
}

export default ScorePanel