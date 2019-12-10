import { Tipo_Neumatico } from "./tipo_neumatico";

export class Camion {
    yearVeh: number;
    id_Veh: number;
    marcaVeh: string;
    modeloVeh: string;
    patenteVeh: string;
    cantNeu: string;
    tipoNeuma = {} as Tipo_Neumatico;
}