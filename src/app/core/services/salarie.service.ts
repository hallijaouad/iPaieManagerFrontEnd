import { Salarie } from './../models/salarie.model';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

const endPointRoutes = {
  salaries: 'salaries',
  salarie: (id: number) => `salaries/${id}`,
  edition: (id: number) => `editions/attestation_salaire/${id}/`
};

@Injectable({
  providedIn: 'root'
})
export class SalarieService {

  constructor(
    private apiService: ApiService) { }

    /**
     * Get all salariés
     */
  getAll(): Observable<Salarie[]> {
    return this.apiService.get(endPointRoutes.salaries);
  }

  // Methode getSalarie pour récupérer un salarie
  getSalarie(id: number): Observable<Salarie> {
    return this.apiService.get(endPointRoutes.salarie(id));
  }

  // Methode store pour ajouter un salarie
  store(salarie: Salarie): Observable<Salarie> {
    // Si l'id => update sinon insert
    if (salarie.id){
      return this.apiService.put(endPointRoutes.salarie(salarie.id), salarie);
    }else{
      return this.apiService.post(endPointRoutes.salaries, salarie);
    }
  }
// Suppression d'un salarie
  delete(id){
    return this.apiService.delete(endPointRoutes.salarie(id));
  }


/**
 * Edition attestation de salaire
 * @param id 
 */
  genereAttestationSalaire(id: number): Observable<Salarie> {
    return this.apiService.get(endPointRoutes.edition(id));
  }

}
