import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Grupo} from "./model/grupo";
import {Aula} from "../aula/model/aula";

const baseUrl = environment.urlBase+'/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) {
  }

  cargarData() {
    let url = `${baseUrl}/listar`;
    return this.http.get<Grupo[]>(url);
  }

  registrarData(grupo: Grupo) {
    let url = `${baseUrl}/crear`;
    console.log(grupo);
    return this.http.post<number>(url, grupo);
  }

  eliminar(idGrupo: number) {
    let url = `${baseUrl}/eliminar/${idGrupo}`;
    return this.http.delete<number>(url);
  }

    actualizar(grupo: Grupo) {
    const url = `${baseUrl}/grupo/actualizar`;
    return this.http.put<number>(url, grupo);
  }

}
