import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Restoran } from 'src/app/models/restoran';
import { KorisnikService } from 'src/app/services/korisnik/korisnik.service';
import { RestoraniService } from 'src/app/services/restorani.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restorani: Restoran[] = [];

  constructor(private _restoraniService: RestoraniService, private _korisnikService: KorisnikService)
  { 
    this.restorani = _restoraniService.getRestorani();
  }

  ngOnInit(): void 
  {
    console.log(this._korisnikService.korisnik);
  }

  klik(index: number)
  {
    this._restoraniService.setTrenutni(this.restorani[index]);
  }
}
