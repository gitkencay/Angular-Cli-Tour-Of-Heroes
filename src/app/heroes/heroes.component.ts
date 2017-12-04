import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  myhero: Hero = {
    id: '1412_Pirates',
    name: 'Trafalgar Law',
	gender: 'Lesbo'
  };


  constructor() { }
  ngOnInit() {

  }

}