import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LivreService } from '../service/livre.service';
import { Livre } from '../model/livre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-livre',
  templateUrl: './formulaire-livre.component.html',
  styleUrls: ['./formulaire-livre.component.css']
})
export class FormulaireLivreComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private ls:LivreService, private route:Router) {}

  livreForm!:FormGroup;

  ngOnInit(): void {
    this.livreForm = this.formBuilder.group(
      {
        titre:[null],
        auteur:[null],
        datePublication:[null]
      }
    )
  }

  saveLivre()
  {
    this.ls.ajoutLivre(this.livreForm.value).subscribe();
    this.route.navigateByUrl("livre");
  }

}
