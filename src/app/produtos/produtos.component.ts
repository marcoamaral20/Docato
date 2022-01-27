import { Component, OnInit } from '@angular/core';
import { ProdutosI } from '../interface/produtos.interface';
import { ApiService } from 'src/app/service/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos!: ProdutosI[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProdutos().subscribe(data => {
      this.produtos = data.response
    })
  }

}
