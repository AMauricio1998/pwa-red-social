import { Component, Input, OnInit } from '@angular/core';
import { Materia } from '../interfaces/Materia';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  @Input() materia = {} as Materia;
  semestreSeleccionado: number = 1;
  materias: Materia[] = [];

  constructor( private _materiasService: MateriasService) { 
    this.materias = this._materiasService.getMaterias(  )
  }

  ngOnInit(): void {
  }

}
