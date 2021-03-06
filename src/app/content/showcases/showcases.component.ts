import { ShowcasesService } from './../../services/showcases/showcases.service';
import { ShowcaseItem } from './../../data/showcase-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcases',
  templateUrl: './showcases.component.html',
  styleUrls: ['./showcases.component.scss']
})
export class ShowcasesComponent {

  constructor(private  showcasesService : ShowcasesService){}

  showcaseItems$ = this.showcasesService.getAllShowCases();

}
