import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
  pipes: [JsonPipe]
})
export class ElementComponent implements OnInit {
	beers = [ {number:1,elements:[1,2,3,4,5,6]},{ number:2, elements:[1,2,3]}, {number:2, elements:[1,2,3,4] }];
  constructor() { }

  ngOnInit() {
  }
}
