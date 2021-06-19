import {Component, OnInit} from '@angular/core';
import {Aula} from "../model/aula";
import {AulaService} from "../aula.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GrupoService} from "../../grupo/grupo.service";
import {Grupo} from "../../grupo/model/grupo";

@Component({
  selector: 'app-actualizar-aula',
  templateUrl: './actualizar-aula.component.html',
  styleUrls: ['./actualizar-aula.component.css']
})
export class ActualizarAulaComponent implements OnInit {


  public aulas: Aula [] = [];
  public cargando: boolean = true;
  public formAula: FormGroup;
  public grupos: Grupo [] = [];

  constructor(private aulaService: AulaService, private grupoService: GrupoService) {
    this.formAula = new FormGroup({});
    this.grupoService.cargarData().subscribe(
      resp => this.grupos = resp
    );
  }

  ngOnInit(): void {
    this.llenarForm();
  }


  llenarForm() {
    this.formAula = new FormGroup({
      nombre: new FormControl(this.aulaService.aula[0].nombre, [Validators.required]),
      grupos: new FormControl(this.aulaService.aula[0].grupos, [Validators.required]),
      id: new FormControl(this.aulaService.aula[0].id, [Validators.required])
    });
  }

  actualizar() {
    let valor: string[] = this.formAula.value.grupos.split(",");
    valor.forEach(value => {
      this.grupos.forEach(value1 => {
        if (value == value1.id.toString()) {
          value1.setAula(this.aulaService.aula[0].id);
          this.grupoService.actualizar(value1).subscribe()
        }
      })

    });
    this.aulaService.registrarData(this.formAula.value)
      .subscribe(
        aulas => {
          this.cargando = false;
        }
      );
  }


}
