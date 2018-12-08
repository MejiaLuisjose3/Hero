import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroesService,ValidarHeroe } from '../../service/heroes.service';

@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styles: []
	})
export class BusquedaComponent implements OnInit {

	heroe:ValidarHeroe[]=[];
	

	constructor(
		private _activate:ActivatedRoute,
		private _heroesS:HeroesService,
		private _router:Router) 
	{ 

		this._activate.params.subscribe(params=>
		{
			
			this.heroe=this._heroesS.buscarH(params['nombre']);

			if(this.heroe.length == 0 || undefined)
			{
				alert("no se encontraron datos con: "+params['nombre'])
				_router.navigate(["/heroes"]);

			}
			});

		
	}

	ngOnInit() {
		
	}

}
