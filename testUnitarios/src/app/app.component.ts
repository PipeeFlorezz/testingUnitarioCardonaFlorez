import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from './models/models';
import { AdminService } from './Services/admin.service';
//import { AdminService } from './Services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = false;
  public formAdmin: FormGroup;
  public admin!: Admin;
  public administradores: Admin[] = [];
  public dataSuccess: boolean = false;
  public yaExiste: boolean = false;
  constructor(
    private router: Router,
    private adminServices: AdminService

  ) {
    this.formAdmin = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      clave: new FormControl()
    });
  }

  ngOnInit(): void {
    
  }

  adminForm() {
    let dato = this.adminServices.saludos();
    console.log(dato);
    this.administradores.push(this.formAdmin.value);
  }
}
