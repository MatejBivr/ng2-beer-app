import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService {
	apiKey: string;
	beersUrl: string;
  constructor(public http: Http) {
  	this.apiKey= 'e2a17c1ebeced7201770a6ce283e4bb1';
  	this.beersUrl='http://api.brewerydb.com/v2/';
  }

  getBeers(){
  	let headers = new Headers({ 'Content-Type': 'application/json' });
  	return this.http.get(this.beersUrl+'styles?key='+this.apiKey+'&format=json', {headers:headers})
  		.map(res => res.json());
  }

}
