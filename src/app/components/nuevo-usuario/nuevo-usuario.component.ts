import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  generos: string[] = ['Masculino', 'Femenino'];
  formNuevoUsuario !: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formNuevoUsuario = this.fb. group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      apellidos: [''],
      genero: ['Masculino'],
      correo: ['', [Validators.required, Validators.email]],
      direccion: this.fb.group({
        calle: [''],
        ciudad: [''],
        estado: [''],
        codigoPostal: [''],
      })
    })
  }

  guardar() {
    console.log('Guardar')
    console.log(this.formNuevoUsuario)
  }
}
