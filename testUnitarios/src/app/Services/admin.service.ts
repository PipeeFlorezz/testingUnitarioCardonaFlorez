import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin, alumno } from '../models/models';
import { ruta } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public url: string;
  constructor(
    private http: HttpClient
  ) { 
    this.url = ruta.Url;
  }
  saludos(){
    return 'saludando...'
  }

  llamarAlumnos(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this.http.get(this.url + 'alumnos', {headers: headers})
  }
}
