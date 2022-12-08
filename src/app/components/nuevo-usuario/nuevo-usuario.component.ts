import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  mensaje = false;
  generos: any[] = [{id:1, name: 'masculino'}, {id: 0, name: 'femenino'}];
  formNuevoUsuario !: FormGroup;

  constructor( private fb: FormBuilder, private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.formNuevoUsuario = this.fb. group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      lastname: [''],
      gender: [1],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        streat: [''],
        city: [''],
        state: [''],
        postalCode: [''],
      })
    })
  }

  guardar() {
    this.formNuevoUsuario.markAllAsTouched();

    if(this.formNuevoUsuario.valid) {
      this._usuarioService.addUser(this.formNuevoUsuario.value)
        .subscribe(response => {
          return this.mensaje = true;
        }, err => {
          return this.mensaje = false;
        });
    } 
  }
}
