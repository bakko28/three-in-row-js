import { Game } from "./game.js";
import { Grid } from "./grid.js";

export class MathThree {
    wrap = document.querySelector('.wrap');

    constructor(rowsCount, columnsCount, tilesCount) {
        this.game = new Game(rowsCount, columnsCount, tilesCount);
        this.grid = new Grid(this.wrap, this.game.matrix)
        this.wrap.addEventListener("swap", event => {
            const firstElementPosition = event.detail.firstElementPosition;
            const secondElementPosition = event.detail.secondElementPosition;
            this.swap(firstElementPosition, secondElementPosition);
        })
        
    }

    swap(firstElementPosition, secondElementPosition) {
        const swapStates = this.game.swap(firstElementPosition, secondElementPosition);
        console.log(swapStates)
    }
}