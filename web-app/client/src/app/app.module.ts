import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/material.module';
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';
import { SanteServiceWebComponent } from './sante-service-web/sante-service-web.component';
import { SanteServiceWebItemComponent } from './sante-service-web/sante-service-web-item/sante-service-web-item.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MeteoComponent } from './meteo/meteo.component';


const appRoutes: Routes =  [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'sante', component: SanteServiceWebComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'meteo', component: MeteoComponent },

  { path: '**', component: PageNonTrouveComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    PageNonTrouveComponent,
    SanteServiceWebComponent,
    SanteServiceWebItemComponent,
    InscriptionComponent,
    ConnexionComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    Title
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
