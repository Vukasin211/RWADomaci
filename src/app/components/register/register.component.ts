import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik/korisnik.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //public navLabel1: string;

  //temp promenljiva Korisnik samo za test
    public korisnik: Korisnik;
  //
  constructor(private _korisnikService: KorisnikService) 
  {
    this.korisnik = _korisnikService.korisnik;
  }

  ngOnInit(): void {
  }

  
  funkcija()
  {
    let regDugme = document.querySelector(".registerDugme");
    if(regDugme)
    {
      regDugme.innerHTML = "moj profil";
    }

    //Treba uhvatiti sve vrednosti iz svih inputa i smestiti ih u korisnika

    let logDugme = document.querySelector(".loginDugme");
    if(logDugme)
    {
      logDugme.parentNode?.removeChild(logDugme);
    }

    let input = [".imeUnos", ".prezimeUnos", ".usernameUnos", ".passwordUnos", ".emailUnos", ".mobBrUnos"];
    let podaci = ["", "", "", "", "", ""];
    input.forEach((el, index) =>{
      let inputEl = (<HTMLInputElement>document.querySelector(el)).value;
      if(inputEl)
      {
        podaci[index] = inputEl;
      }
      console.log(inputEl);
    })
    
    this.korisnik = new Korisnik(1, podaci[0], podaci[1], podaci[2], podaci[3], podaci[4], podaci[5]);
    this._korisnikService.korisnik = this.korisnik;
  }
}
