import { UsuariosI } from '../../interface/usuarios.interface';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarios!: UsuariosI[];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllUser().subscribe(data => {
      this.usuarios = data.response;
    })
  }

  editarUsuario(id:number){
    this.router.navigate(['editar', id])
  }

  cadastrarUsuario(){
    this.router.navigate(['cadastrar'])
  }
}
