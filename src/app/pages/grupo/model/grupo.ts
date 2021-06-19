export class Grupo {
  id: number;
  nombre: string;
  aula: number;
  docente: number;
  estudiantes: number;
  estrategias: number[];


  constructor(id: number, nombre: string, aula: number, docente: number, estudiantes: number, estrategias: number[]) {
    this.id = id;
    this.nombre = nombre;
    this.aula = aula;
    this.docente = docente;
    this.estudiantes = estudiantes;
    this.estrategias = estrategias;
  }

  setAula(aula: number): void {
    this.aula = aula;
  }
}
