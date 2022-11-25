import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  mostrarMensaje = true;
  contador = 0;
  materias: string[] = [
    'Gestion de proyectos',
    'PWA',
    'Integradora',
    'Desarrollo movil',
    'Optativa1',
    'Ingles'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
