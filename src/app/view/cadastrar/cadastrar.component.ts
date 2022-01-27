import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosI } from 'src/app/interface/usuarios.interface';
import { ResponseI } from 'src/app/interface/response.interface';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastrarForm = new FormGroup({
    id_usuario: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    cpf: new FormControl(''),
    nome: new FormControl(''),
    apelido: new FormControl(''),

  })

  constructor(private api: ApiService,  private router: Router ) { }

  ngOnInit(): void {
  }

  postForm(form:UsuariosI){
    this.api.postCadastrar(form).subscribe(data => {
      console.log(data)
    })
  }
  sair(){
    this.router.navigate(['dashboard'])
  }



}
