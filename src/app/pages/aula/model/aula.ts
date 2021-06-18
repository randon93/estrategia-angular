export class Aula {
  id: number;
  nombre: string;
  grupos: number[]


  constructor(id: number, nombre: string, grupos: number[]) {
    this.id = id;
    this.nombre = nombre;
    this.grupos = grupos;
  }
}
