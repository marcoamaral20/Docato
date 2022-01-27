import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosI } from 'src/app/interface/usuarios.interface';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario!: UsuariosI;

  constructor(private activatedrouter:ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {

  }


  userLogin(){

  }

  toHome(){
    this.router.navigate(['login'])
  }
  toDashboard(){
    this.router.navigate(['/dashboard'])
  }
  toProdutos(){
    this.router.navigate(['produtos'])
  }


}
