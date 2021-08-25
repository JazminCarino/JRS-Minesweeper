export class Cell {
    isBomb?: Boolean;
    isRevealed?: Boolean;
    neighboringBombs?: number;
    flag?: Boolean;


constructor(){
    this.isBomb =false;
    this.isRevealed= false;
    this.neighboringBombs= 0;
    this.flag = false;

}
}