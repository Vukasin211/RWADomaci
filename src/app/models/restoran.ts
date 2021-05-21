import { Sto } from "./sto";

export class Restoran
{
    public id: number;
    public naziv: string;
    public ocena: number;
    public slika: string[];
    public slikaBr: number;
    public adresa: string;
    public telefon: string;
    public dogadjaj: string;
    public mapaLokacija: string;
    public mapaLokacijaSlika: string;


    public stoX: number;
    public stoY: number;

    public stolovi: Sto[];

    constructor(id: number, naziv: string, ocena: number, slika: string, adresa: string, telefon: string)
    {
        this.id = id;
        this.naziv = naziv;
        this.ocena = ocena;
        this.slika = [];
        this.adresa = adresa;
        this.telefon = telefon;
        this.slika.push(slika);
        this.mapaLokacija = "";
        this.mapaLokacijaSlika = "";
        this.slikaBr = 1;
        this.dogadjaj = "";
        this.stoX = 5;
        this.stoY = 5;
        this.stolovi = [];

        let k = 0;

        for(let i = 0; i < this.stoX; i++)
        {
            for(let j = 0; j < this.stoY; j++)
            {
                this.stolovi[k] = new Sto(j,i,k);
                k++;
            }
        }
    }

    dodajSlike(slika: string)
    {
        this.slika.push(slika);
        this.slikaBr++;
    }

    getSlikeBroj()
    {
        return this.slika.length;
    }

    postaviDogadjaj(dogadjaj: string)
    {
        this.dogadjaj = dogadjaj;
    }

    dodajMapaLokaciju(lok: string)
    {
        this.mapaLokacija = lok;
    }

    dodajMapaLokacijaSliku(lok: string)
    {
        this.mapaLokacijaSlika = lok;
    }
    
}