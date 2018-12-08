import { Component, OnInit } from '@angular/core';
import { HeroesService, ValidarHeroe } from '../../service/heroes.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html'
	})
export class HeroesComponent implements OnInit {

	public heroe:ValidarHeroe[]=[];
	constructor(private _heroesService:HeroesService) 
	{	}

	ngOnInit() {
		this.heroe=this._heroesService.getHeroes();
		console.log(this.heroe);
	}

}
