import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

 heroModel = new Hero(25,'Keshvi','keshu25@txt.com','Bakers','NewYork','');
  myName = "Keshvi";
  onSubmit(value:any){

     console.log(value);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
