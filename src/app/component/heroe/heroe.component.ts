import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService,ValidarHeroe } from '../../service/heroes.service'


@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html',
	styles: []
	})
export class HeroeComponent implements OnInit {

	public hero:ValidarHeroe; 
	
	constructor(
		private _activatedrouter: ActivatedRoute,
		private _heroeservicio: HeroesService) 
	{
		this._activatedrouter.params.subscribe(params=>
		{
			this.hero=_heroeservicio.getHeroe(params['id']);
			console.log(this.hero);
			});
	}

	ngOnInit() {
	}

}
