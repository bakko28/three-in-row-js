import { Tile } from "./tile.js";

export class Grid {
    tiles = [];
    selectedTile = null;

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
        const tile = new Tile(this.wrap, row, column, value, this.handleTileClick);
        this.tiles.push(tile);
    }

    handleTileClick = (row, column) => {
        if (!this.selectedTile) {
            this.selectTile(row, column);
            return;
        }

        const isSelectedNeighbours = this.isSelectedTileNeighboursWith(row, column);
        if(!isSelectedNeighbours) {
            this.unselectedTile();
            this.selectTile(row, column);
            return;
        }

        const firstElementPosition = {row: this.selectedTile.row, column: this.selectedTile.column};
        const secondElementPosition = {row, column};

        const event = new CustomEvent("swap", {
            detail: {
                firstElementPosition,
                secondElementPosition
            }
        });

        this.wrap.dispatchEvent(event);
    }

    selectTile(row, column) {
        this.selectedTile = this.findTyleBy(row, column);
        this.selectedTile.select();
    }

    unselectedTile() {
        this.selectedTile.unselect();
        this.selectedTile = null;
    }

    findTyleBy(row, column) {
        return this.tiles.find(tile => tile.row === row && tile.column === column);
    }

    isSelectedTileNeighboursWith(row, column) {
        const isColumnNeighbours = this.selectedTile.column === column && Math.abs(this.selectedTile.row - row) === 1;
        const isRowNeighbours = this.selectedTile.row === row && Math.abs(this.selectedTile.column - column) === 1;
        return isColumnNeighbours || isRowNeighbours;
    }
} 