import { Rezervacija } from "./rezervacija";

export class Korisnik
{
    public id: number;
    public ime: string;
    public prezime: string;
    public username: string;
    public email: string;
    public telefon: string;
    public password: string;
    public rezervacija: Rezervacija;

    constructor(id: number, ime: string, prezime: string, username: string, email: string, telefon: string, password: string)
    {
        this.id = id;
        this.ime = ime;
        this.prezime = prezime;
        this.username = username;
        this.email = email;
        this.telefon = telefon;
        this.password = password;
        this.rezervacija = new Rezervacija();
    }

    rezervisi()
    {
        this.rezervacija.rezervisi(this.id);
    }



}