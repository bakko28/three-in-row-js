export class Tile {
    constructor(wrap, row, column, value, handleTileClick) {
        this.tileElement = document.createElement("div");
        this.tileElement.classList.add('tile');
        this.tileElement.classList.add(`tile${value}`);
        this.setPositionBy(row, column);
        wrap.append(this.tileElement);
    }

    setPositionBy(row, column) {
        this.row = row;
        this.column = column;
        this.tileElement.style.setProperty("--row", row)
        this.tileElement.style.setProperty("--column", column)
    }
}