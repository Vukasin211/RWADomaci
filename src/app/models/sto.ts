export class Sto
{
    public x: number;
    public y: number;
    public brStola: number;

    constructor(x:number, y: number, brStola: number)
    {
        this.x = x;
        this.y = y;
        this.brStola = brStola;
    }

    sendMessage()
    {
        alert("X: " + this.x + "Y: " + this.y + " brStola: " + this.brStola);
    }
}