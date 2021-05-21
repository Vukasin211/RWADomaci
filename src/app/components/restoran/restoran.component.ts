import { Component, Input, OnInit } from '@angular/core';
import { Restoran } from 'src/app/models/restoran';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { RestoraniService } from 'src/app/services/restorani.service';

@Component({
  selector: 'app-restoran',
  templateUrl: './restoran.component.html',
  styleUrls: ['./restoran.component.scss']
})
export class RestoranComponent implements OnInit {

  @Input() restoran: Restoran = new Restoran(0, "", 0, "", "", "");

  faCoffe = faCoffee;
  faStar = faStar;
  

  constructor(private _restoraniService: RestoraniService) 
  {
    
  }

  ngOnInit(): void {
    //this.restoran = this._restoraniService.getTrenutni();
  }
  
}
