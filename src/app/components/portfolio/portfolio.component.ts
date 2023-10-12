import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  
  constructor(private activatedRoute: ActivatedRoute) {}

 projects = {
  name : "project name",
  description : "description",
  image : "assets/exemple1.png"
 }

}
