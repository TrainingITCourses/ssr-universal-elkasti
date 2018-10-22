export enum enCampo {
    ninguno,
    mision,
    agencia,
    estado,
}

export class CriterioBusqueda {
    campo: enCampo;
    valor: any;
}

