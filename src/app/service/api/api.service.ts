import { Injectable } from '@angular/core';
import { RequestLogin } from 'src/app/interface/login.interface';
import { ResponseI } from 'src/app/interface/response.interface';
import { UsuariosI } from 'src/app/interface/usuarios.interface';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000/usuarios/'

  constructor(private http: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseI> {
    return this.http.post<ResponseI>('/api/usuarios/login', requestLogin);

  }

  getAllUser(): Observable<ResponseI>{
    return this.http.get<ResponseI>('/api/usuarios/all')
  }

  getSingleUser(id:any): Observable<ResponseI>{
    return this.http.get<ResponseI>('/api/usuarios/' + id)
  }

  postUsuario(form:UsuariosI): Observable<ResponseI>{
    return this.http.patch<ResponseI>('/api/usuarios/', form)
  }

  deleteUsuario(form:UsuariosI): Observable<ResponseI>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
    body:form
  }
    return this.http.delete<ResponseI>('/api/usuarios/', httpOptions)
  }

  postCadastrar(form:UsuariosI): Observable<ResponseI>{
    return this.http.post<ResponseI>('/api/usuarios/cadastro', form)
  }

  getProdutos():Observable<ResponseI>{
    return this.http.get<ResponseI>('/api/crawler')
  }

}
