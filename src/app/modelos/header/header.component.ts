import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private activatedrouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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
