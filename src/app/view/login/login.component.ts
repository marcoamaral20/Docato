import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api/api.service';
import { RequestLogin } from 'src/app/interface/login.interface';
import { ResponseI } from 'src/app/interface/response.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    senha: new FormControl('', Validators.required)
  })

  constructor (private api: ApiService, private router: Router ) { }

  errorStatus:boolean = false;
  errorMsg = "";

  ngOnInit(): void {

  }

  public doLogin(form: RequestLogin) {

    this.api.doLogin(form).subscribe(data => {

      let dataResponse: ResponseI = data;

      if(dataResponse.status == "ok"){
        this.router.navigate(['dashboard'])
      } else {
          this.errorStatus = true;
          this.errorMsg = "Falha na autenticação";
      }
    })
  }

  cadastrarUsuario(){
    this.router.navigate(['cadastrar'])
  }
}
