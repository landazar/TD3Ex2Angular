import { Component, OnInit } from '@angular/core';
import { LivreService } from '../service/livre.service';
import { Livre } from '../model/livre.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  constructor(private ls:LivreService, private route:Router) {}

  listeLivre!:Observable<Livre[]>;

  ngOnInit(): void {
    this.listeLivre = this.ls.findAllLivres();
  }

  supprimer(id:number)
  {
    this.ls.supprimerLivre(id).subscribe();
    this.route.navigateByUrl("livre");
  }

  getLivreByIsbn(id:number)
  {
    this.route.navigateByUrl("updateLivre/" + id);
  }



  


}
