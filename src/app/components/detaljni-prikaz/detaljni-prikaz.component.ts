import { Component, OnInit } from '@angular/core';
import { Restoran } from 'src/app/models/restoran';
import { RestoraniService } from 'src/app/services/restorani.service';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-detaljni-prikaz',
  templateUrl: './detaljni-prikaz.component.html',
  styleUrls: ['./detaljni-prikaz.component.scss']
})
export class DetaljniPrikazComponent implements OnInit {

  constructor(private _restoranService: RestoraniService, private router: Router) { this.restoran = new Restoran(0, "", 0, "", "", "");}

  restoran: Restoran;

  faStarHalf = faStarHalf;
  faStar = faStar;

  ngOnInit(): void {
    this.restoran = this._restoranService.getTrenutni();
    
  }

  otvoriSliku(slika: string)
  {
    window.open(slika,"_blank");
  }

  klik()
  {
    window.open('https://www.google.com/search?tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=ALeKk00_C_G5WFvkq3QUFZ4b9s3GWqWm1g:1621332594752&q=tramvaj+nis&rflfq=1&num=10&ved=2ahUKEwjqwv3K_tLwAhXL5KQKHV9DDj0QtgN6BAgIEAc#rlfi=hd:;si:;mv:[[43.3200771,21.8951761],[43.319936299999995,21.8951101]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!2m1!1e2!2m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:9',"_blank");
  }
}
