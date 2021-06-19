import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Aula} from "./model/aula";

const baseUrl = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class AulaService {
  public aula: Aula[] = [];

  constructor(private http: HttpClient) {
  }

  cargarData() {
    const url = `${baseUrl}/aula/listar`;
    return this.http.get<Aula[]>(url);
  }

  registrarData(aula: Aula) {
    const url = `${baseUrl}/aula/crear`;
    console.log(aula);
    return this.http.post<number>(url, aula);
  }

  eliminar(idAula: number) {
    console.log(idAula);
    const url = `${baseUrl}/aula/eliminar/${idAula}`;
    return this.http.delete<number>(url);
  }

  actualizar(aula: Aula) {
    const url = `${baseUrl}/aula/actualizar`;
    return this.http.put<number>(url, aula);
  }

}
