import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http:HttpClient) { }

  ajoutLivre(livre:Livre):Observable<Livre>
  {
    return this.http.post<Livre>("http://localhost:8080/saveLivre", livre);
  }

  supprimerLivre(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deleteLivre/" + id);
  }

  findAllLivres():Observable<Livre[]>
  {
    return this.http.get<Livre[]>("http://localhost:8080/listeLivre");
  }

  getLivreByIsbn(id:number):Observable<Livre>
  {
    return this.http.get<Livre>("http://localhost:8080/getLivre/" + id);
  }

  updateLivre(livre:Livre):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierLivre", livre);
  }

}
