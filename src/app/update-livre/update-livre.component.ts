import { Component, OnInit } from '@angular/core';
import { LivreService } from '../service/livre.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {
  
  constructor(private ls:LivreService, private formBuilder:FormBuilder, private ar:ActivatedRoute, private route:Router) {
    this.id = ar.snapshot.params["id"];
  }

  livreForm?:FormGroup;
  id!:number;

  ngOnInit(): void {
    this.ls.getLivreByIsbn(this.id).subscribe(data => {
      this.livreForm = this.formBuilder.group(
        {
          isbnlivre:[data.isbnlivre],
          titre:[data.titre],
          auteur:[data.auteur],
          datePublication:[data.datePublication]
        })
      });
  }

  updateLivre()
  {
    this.ls.updateLivre(this.livreForm?.value).subscribe();
    this.route.navigateByUrl("livre");
  }

}
