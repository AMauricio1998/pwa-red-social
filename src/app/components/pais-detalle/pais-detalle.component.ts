import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent implements OnInit {

  public pais: any = [];
  constructor(private activatedRoute: ActivatedRoute, private _paisesService: PaisesService) {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this._paisesService.getPais(id).subscribe(response => {
        return this.pais = response
      });
    })
   }

  ngOnInit(): void {
  }

}
