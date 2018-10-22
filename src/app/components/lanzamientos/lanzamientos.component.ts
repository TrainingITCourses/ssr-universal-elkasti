import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CriterioBusqueda, enCampo } from '../../shared/lanzamientos';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent implements OnInit {

  public launches: any[];
  public filteredLaunches: any[];

  constructor(
    private api: ApiService,
    private cdRef: ChangeDetectorRef
  ) { }


  ngOnInit() {

    this.api.getLaunches$().subscribe(
      (res: any[]) => {
        this.launches = res;
        this.filteredLaunches = res;
        this.cdRef.markForCheck();
      }
    );

  }


  filtrar(criterio: CriterioBusqueda) {

    if (criterio.valor) {

      switch (criterio.campo) {
        case enCampo.ninguno:
          this.filteredLaunches = this.launches;
          break;
        case enCampo.mision:
          this.filteredLaunches = this.launches.filter(
            launch => launch.missions && launch.missions.some(elem => elem.id === criterio.valor)
          );
          break;
        case enCampo.agencia:
          this.filteredLaunches = this.launches.filter(
            launch => launch.rocket && launch.rocket.agencies && launch.rocket.agencies.some(elem => elem.id === criterio.valor)
          );
          break;
        case enCampo.estado:
          this.filteredLaunches = this.launches.filter(
            launch => launch.status === criterio.valor
          );
          break;
      }
    } else {
      this.filteredLaunches = this.launches;
    }
  }
}
