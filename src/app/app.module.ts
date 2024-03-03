import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UberUnsComponent } from './uber-uns/uber-uns.component';
import { TherapieComponent } from './therapie/therapie.component';
import { GalerieComponent } from './galerie/galerie.component';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    UberUnsComponent,
    TherapieComponent,
    GalerieComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'uber-uns', component: UberUnsComponent},
      {path: 'therapie', component: TherapieComponent},
      {path: 'galerie', component: GalerieComponent},
      {path: 'kontakt', component: KontaktComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
