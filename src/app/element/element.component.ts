import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service'

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
	beerTypes= []
	ids = [
		{number:1,beerIds:[45,64,111,47,51,52]},
		{number:2, beerIds:[68,65,66,166,67,56]},
		{number:3, beerIds:[60,58,71,61,63,57]},
		{number:4, beerIds:[0,24,1,31]},
		{number:5, beerIds:[2,3,4]},
		{number:6, beerIds:[6,7,8]},
		{number:7, beerIds:[6,7,8]},
		{number:8, beerIds:[17,18]},
		{number:9, beerIds:[22,23,19,15,20,42]},
		{number:9, beerIds:[74,75,97]},
		{number:9, beerIds:[93,92,96,102]},
		{number:9, beerIds:[77,78,82,83]},
		{number:9, beerIds:[88,89,87,90]},
		{number:9, beerIds:[44,54]},
		{number:9, beerIds:[70]},
		{number:9, beerIds:[81,79]},
		{number:9, beerIds:[108,109]},
		{number:9, beerIds:[53,33]},
		{number:20, beerIds:[12,14] }
	];
	beers = [];
  constructor(private beerService: BeerService) { }

  ngOnInit() {
  	this.beerService.getBeers().subscribe((types: any)=> {
  		this.beerTypes = types;
  		for(let i=0; i < this.ids.length; i++){
  			let beersArray = [];
	  		for(let j=0; j < this.ids[i].beerIds.length; j++){	  			
	  			let beer = this.ids[i].beerIds[j];
	  			beersArray.push(this.beerTypes.data[beer]);
	  		}
	  		this.beers.push({number: i+1, elements:beersArray})
	  		console.log(this.beers);
	  	}
  	});

  }
}
