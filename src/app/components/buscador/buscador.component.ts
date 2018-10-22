import { Component, ChangeDetectorRef, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CriterioBusqueda, enCampo } from '../../shared/lanzamientos';

@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.component.html',
    styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
    @Output() public filtrar = new EventEmitter<CriterioBusqueda>();

    public lista: any[];

    criterio: CriterioBusqueda = new CriterioBusqueda();

    constructor(
        private api: ApiService,
        private cdRef: ChangeDetectorRef
    ) { }

    ngOnInit() {

    }

    campo(event: any) {
        this.criterio.campo = Number(event.target.value);

        this.api.getData$(this.criterio.campo).subscribe(
            res => {
                this.lista = res;
                this.cdRef.markForCheck();
            }
        );

        this.criterio.valor = '';
        this.onFiltrar();

    }

    buscar(event: any) {

        this.criterio.valor = Number(event.target.value);

        this.onFiltrar();

    }

    onFiltrar() {
        this.filtrar.emit(this.criterio);
    }

}
