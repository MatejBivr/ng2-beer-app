import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	public title:string;
	public subTitle:string;
	public navToggle: boolean = false;
  constructor() { }

  ngOnInit(){
    this.title = 'Angular 2 Full-Screen';
    this.subTitle = 'menu / navigation';
	}
	
	toggleNav(){
		this.navToggle = !this.navToggle;
	}
}
