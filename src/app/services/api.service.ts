import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, filter, pluck } from 'rxjs/operators';
import { enCampo } from '../shared/lanzamientos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getLaunches$ = (): Observable<any[]> => {
    return this.http.get('../../assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches,
        ));
  }

  public getData$ = (campo: enCampo): Observable<any[]> => {

    let url = '';
    let tipo = 'types';
    switch (campo) {
      case enCampo.mision:
        url = '../../assets/launchmissions.json';
        break;
      case enCampo.agencia:
        url = '../../assets/launchagencies.json';
        tipo = 'agencies';
        break;
      case enCampo.estado:
        url = '../../assets/launchstatus.json';
        break;
      default:
        return of([]);
    }

    return this.http.get(url)
      .pipe(
        map((res: any) => res[tipo])
      );

  }
}
