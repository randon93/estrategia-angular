import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AulaService} from "../aula.service";

@Component({
  selector: 'app-registrar-aula',
  templateUrl: './registrar-aula.component.html',
  styleUrls: ['./registrar-aula.component.css']
})
export class RegistrarAulaComponent implements OnInit {
  public aulaForm: FormGroup

  constructor(private aulaService: AulaService) {
    this.aulaForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.construirFormulariAula();
  }

  private construirFormulariAula() {
    this.aulaForm = new FormGroup({
      nombre: new FormControl('prueba', [Validators.required]),
      grupos: new FormControl([], [])
    });
  }


  public registrar() {
    console.log(this.aulaForm.value);
    this.aulaService.registrarData(this.aulaForm.value).subscribe(
      resp => console.log(resp)
    );

  }

}
