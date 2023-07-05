import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireLivreComponent } from './formulaire-livre/formulaire-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    FormulaireLivreComponent,
    UpdateLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
