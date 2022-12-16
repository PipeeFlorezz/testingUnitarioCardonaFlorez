import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminService } from './admin.service';
import { of } from 'rxjs';

describe('AdminService', () => {
  let httpClientSpy: {get: jasmine.Spy}
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AdminService(httpClientSpy as any)
  });

  it('el servicio existe y funciona correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('el servicio retorna los datos de alumnos', () => {
    const mockDatos = [
      {
      apellido: "Cardona Flórez",
      clave: "$2a$10$3QHVDdbDaOwdD2.LFIM9Nu/AzAZjGvnAaA7MKJdIVFuMsMXXvgc1u",
      createdAt: "2022-12-14T01:09:48.206Z",
      edad: 28,
      email: "pipeeflorezz@hotmail.com",
      nombre: "Luis Felipe",
      pais: "Colombia",
      sexo: "Masculino",
      updatedAt: "2022-12-14T01:09:48.206Z",
      __v: 0,
      _id: "6399225c5d1d546e0815e5d0"
    },
      {
      apellido: "Garcia",
      clave: "$2a$10$8W7U3B/JdhZKXBA4hEbIuuH9Cn/VHLYbDXHZNt2dXJmZdm/LfSn6W",
      createdAt: "2022-12-14T01:07:53.397Z",
      edad: 35,
      email: "Abner77@gmail.com",
      nombre: "Abner",
      pais: "Marruecos",
      sexo: "Masculino",
      updatedAt: "2022-12-14T01:07:53.397Z",
      __v: 0,
      _id: "639921e95d1d546e0815e5c6",
      },
      {
      apellido: "Garcia",
      clave: "$2a$10$XOFUu/3PY07icnfzO74uBeNN5ONlHFjXwuNiqlGeCNext1/SJwY3C",
      createdAt : "2022-12-14T00:45:47.309Z",
      edad: 35,
      email: "Lautaro_99@gmail.com",
      nombre: "Lautaro",
      pais: "Yugoslavia",
      sexo: "Masculino",
      updatedAt: "2022-12-14T01:06:07.625Z",
      __v: 0,
      _id: "63991cbb5d1d546e0815e584"
    }];

    httpClientSpy.get.and.returnValue(of(mockDatos));
    service.llamarAlumnos().subscribe((alumnos) => {
      expect(alumnos).toEqual(mockDatos);
    })
  });
});
