import {Component, OnInit} from '@angular/core';
import {AulaService} from "../aula.service";
import {Aula} from "../model/aula";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listar',
  templateUrl: './listar-aula.component.html',
  styleUrls: ['./listar-aula.component.css']
})
export class ListarAulaComponent implements OnInit {

  public aulas: Aula [] = [];
  public cargando: boolean = true;

  constructor(private aulaService: AulaService, private router: Router) {
  }

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData() {
    this.cargando = true;
    this.aulaService.cargarData()
      .subscribe(
        aulas => {
          this.cargando = false;
          this.aulas = aulas;
        }
      );
  }

  eliminar(id: number) {
    this.aulaService.eliminar(id)
      .subscribe();
    this.router.navigateByUrl("/dashboard/aula/listar")
  }

  actualizar(aula: Aula) {
    this.aulaService.aula = [aula]
    this.router.navigateByUrl("/dashboard/aula/actualizar")
  }


}
