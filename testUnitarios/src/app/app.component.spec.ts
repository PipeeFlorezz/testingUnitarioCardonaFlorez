import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminService } from './Services/admin.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [
        HttpClientModule,
        AdminService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testUnitarios'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBeFalse();
  });

  
  it(`si el campo del nombre no esta ingresado el formulario permanece inactivo`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const formulario = app.formAdmin;
    const clave = formulario.controls['clave'];

    clave.setValue('123');
    expect(formulario.valid).toBeFalse();
  });

  it(`se renderiza el array de administradores cuando le doy click al boton del formulario`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const formulario = app.formAdmin;
    const nombre = formulario.controls['nombre'];
    const clave = formulario.controls['clave'];

    nombre.setValue('Admin99');
    clave.setValue('123');
    const boton = fixture.debugElement.query(By.css('#agregar'));
    boton.nativeElement.click();
    fixture.detectChanges();

    const ListaAdmins = fixture.debugElement.query(By.css('#listaAdmins'))
    expect(ListaAdmins).toBeTruthy();
  });

});
