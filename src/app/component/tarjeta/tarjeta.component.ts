import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tarjeta',
	templateUrl: './tarjeta.component.html',
	styles: []
	})
export class TarjetaComponent implements OnInit {
	
	@Input() hero:any={};
	@Input() i:number;

	constructor() 
	{ }

	ngOnInit() {
	}

}
