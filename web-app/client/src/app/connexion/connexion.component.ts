import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.sass']
})
export class ConnexionComponent implements OnInit {

  private regex: string = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&].{8,20}';
  private tentativeEnvoieFormulaire: boolean = false;
  enChargement: boolean = false;
  cacherMdp: boolean = true;
  matcher = new MyErrorStateMatcher();
  
  formulaireConnexion: FormGroup = this.formBuilder.group({
    courriel: new FormControl('', [Validators.required, Validators.email]),
    mdp: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(this.regex)])
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {

  }
  
  connecter() {
    if (!this.formulaireConnexion.valid) {
      return;
    }
    this.enChargement = true;

    let courriel = this.formulaireConnexion.get('courriel')?.value;
    let mdp = this.formulaireConnexion.get('mdp')?.value;

    this.authService.connecter(courriel, mdp).subscribe(reponse => { // TODO : expression dépréciée.. modifier la structure.
      this.enChargement = false;
      this.snackBar.open('Bienvenue !', 'Fermer');
      this.router.navigate(['produits']);
    }, (erreurMessage : HttpErrorResponse) => {
      this.enChargement = false;
      this.snackBar.open(erreurMessage.error, 'Fermer');
    });

    this.formulaireConnexion.reset();
  }

  gererEntrer(e: { keyCode: number; }){
    if(e.keyCode === 13){
       this.connecter();
    }
  }
}



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}