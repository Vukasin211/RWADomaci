import { Injectable } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {
  public korisnik: Korisnik;
  constructor() 
  {
    this.korisnik = new Korisnik(0, "", "", "", "", "", "");
  }
}
