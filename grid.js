import { Tile } from "./tile.js";

export class Grid {
    tiles = []

    constructor(wrap, matrix) {
        this.wrap = wrap;
        this.createTiles(matrix)
    }

    createTiles(matrix) {
        for(let row = 0; row < matrix.length; row++) {
            for(let column = 0; column < matrix[0].length; column++) {
                this.createTile(row, column, matrix[row][column])
            }
        }
    }

    createTile(row, column, value) {
        const tile = new Tile(this.wrap, row, column, value);
        this.tiles.push(tile);
    }
}