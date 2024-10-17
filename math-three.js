import { Game } from "./game.js";
import { Grid } from "./grid.js";

export class MathThree {
    wrap = document.querySelector('.wrap');

    constructor(rowsCount, columnsCount, tilesCount) {
        this.game = new Game(rowsCount, columnsCount, tilesCount);
        this.grid = new Grid(this.wrap, this.game.matrix)
    }
}