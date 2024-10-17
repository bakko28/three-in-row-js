export class Game {
    constructor(rowsCount, columnsCount, elementsCount) {
        this.rowsCount = rowsCount;
        this.columnsCount = columnsCount;
        this.elementsCount = elementsCount;

        this.init();
    }

    init() {
        this.score = 0;
        this.matrix = new Array(this.rowsCount).fill().map(() => new Array(this.columnsCount).fill(null))

        for(let row = 0; row < this.columnsCount; row++) {
            for(let column = 0; column < this.columnsCount; column++) {
                do {
                    this.matrix[row][column] = this.getRandomValue();
                } while (this.isRow(row, column));
            }
        }
    }

    getRandomValue() {
        return Math.floor(Math.random() * this.elementsCount + 1);
    }

    isRow(row, column) {
        return this.isVerticalRow(row, column) || this.isHorizontalRow(row, column)
    }

    isVerticalRow(row, column) {
        const value = this.matrix[row][column]
        let elementsInRow = 1;

        let currentRow = row -1;
        while(currentRow >= 0 && this.matrix[currentRow][column] === value) {
            elementsInRow++
            currentRow--
        }

        currentRow = row +1;
        while(currentRow <= this.rowsCount - 1 && this.matrix[currentRow][column] === value) {
            elementsInRow++
            currentRow++
        }

        return elementsInRow >= 3;
    }

    isHorizontalRow(row, column) {
        const value = this.matrix[row][column];
        let elementsInRow = 1;

        let currentColumn = column -1;
        while(currentColumn >= 0 && this.matrix[row][currentColumn] === value) {
            elementsInRow++
            currentColumn--
        }

        currentColumn = column +1;
        while(currentColumn <= this.columnsCount - 1 && this.matrix[row][currentColumn] === value) {
            elementsInRow++
            currentColumn++
        }
        
        return elementsInRow >= 3;
    }
}