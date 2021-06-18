import {Component, OnInit} from '@angular/core';
import {AulaService} from "../aula.service";
import {Aula} from "../model/aula";

@Component({
  selector: 'app-listar',
  templateUrl: './listar-aula.component.html',
  styleUrls: ['./listar-aula.component.css']
})
export class ListarAulaComponent implements OnInit {

  public aulas: Aula [] = [];
  public cargando: boolean = true;

  constructor(private aulaService: AulaService) {
  }

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData() {
    this.cargando = true;
    this.aulaService.cargarData()
      .subscribe(
        aulas => {
          console.log(aulas);
          this.cargando = false;
          this.aulas = aulas;
          console.log(this.aulas);
        }
      )
  }

}
