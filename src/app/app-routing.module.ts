import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreComponent } from './livre/livre.component';
import { FormulaireLivreComponent } from './formulaire-livre/formulaire-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';

const routes: Routes = [
  {path:"livre", component:LivreComponent},
  {path:"ajoutLivre", component:FormulaireLivreComponent},
  {path:"updateLivre/:id", component:UpdateLivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
