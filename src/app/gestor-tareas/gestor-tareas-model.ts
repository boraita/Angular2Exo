/** 
 * declaración de tipos para ayuda al programador
 * los datos suelen ser instanciados en el servidor
 * en esos casos basta declararlos como interfaces
 * */

export interface Tarea {
    id: number;
    nombre: string;
    diaInicio: Date;
    diaFin: Date;
    prioridad: number;
}
export class GestorTareasModel implements Tarea {
   constructor(
       public id: number,
       public nombre: string,
       public diaInicio: Date,
       public diaFin: Date,
       public prioridad: number
   ) {}
}
