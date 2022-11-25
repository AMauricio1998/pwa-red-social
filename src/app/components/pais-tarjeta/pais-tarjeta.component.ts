import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-tarjeta',
  templateUrl: './pais-tarjeta.component.html',
  styleUrls: ['./pais-tarjeta.component.css']
})
export class PaisTarjetaComponent implements OnInit {

  @Input() pais: any;
  constructor() { }

  ngOnInit(): void {
  }

}
