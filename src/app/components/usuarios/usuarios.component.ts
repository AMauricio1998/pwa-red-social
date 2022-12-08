import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any = [];

  constructor(private usuarioService: UsuarioService) {

    this.usuarioService.getUsuarios().subscribe((data: any) => {
      console.log(data)
      return this.usuarios = data
    });

  }

  ngOnInit(): void {
  }

}
