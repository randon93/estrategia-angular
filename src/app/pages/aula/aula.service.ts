import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Aula} from "./model/aula";

const baseUrl = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  constructor(private http: HttpClient) {
  }

  cargarData() {
    const url = `${baseUrl}/aula/listar`;
    console.log(url);
    return this.http.get<Aula[]>(url);
  }
}
