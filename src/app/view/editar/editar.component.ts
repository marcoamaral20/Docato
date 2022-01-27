import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { UsuariosI } from 'src/app/interface/usuarios.interface';
import { ApiService } from 'src/app/service/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario!: UsuariosI;

  editarForm = new FormGroup({
    id_usuario: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    cpf: new FormControl(''),
    nome: new FormControl(''),
    apelido: new FormControl(''),

  })

  constructor(private activatedrouter:ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    let id_usuario = this.activatedrouter.snapshot.paramMap.get('id');
    let token = this.getToken()
    this.api.getSingleUser(id_usuario).subscribe(data => {
      this.usuario = data.response[0];
      this.editarForm.setValue({
        'id_usuario': this.usuario.id_usuario,
        'email': this.usuario.email,
        'senha': this.usuario.senha,
        'cpf': this.usuario.cpf,
        'nome': this.usuario.nome,
        'apelido': this.usuario.apelido,
      })
      })
  }

  getToken(){
    return localStorage.getItem('token')
  }

  postForm(form:UsuariosI){
    this.api.postUsuario(form).subscribe(data => {
      console.log(data)
    })
  }

  deletar(){
    let dados: UsuariosI = this.editarForm.value;
    this.api.deleteUsuario(dados).subscribe(data => {
      console.log(data)
    })
  }
  sair(){
    this.router.navigate(['dashboard'])
  }
}
