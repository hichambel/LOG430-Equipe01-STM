import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MotDePasseConfirmationValidator } from '../validators/mot-de-passe.validator';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.sass']
})
export class InscriptionComponent implements OnInit {
  private regexMdp: string = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&].{8,20}';

  formulaireInscription!: FormGroup;
  cacherMdp: boolean = true;
  cacherMdpConfirmation: boolean = true;
  enChargement: boolean = false;
  matcher = new MyErrorStateMatcher();
  error: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private snackBar : MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.formulaireInscription = this.fb.group({
      courriel: new FormControl('', [Validators.required, Validators.email]),
      mdp: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(this.regexMdp)]),
      mdpConfirmation: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(this.regexMdp)])
    },
    {
      validator: MotDePasseConfirmationValidator("mdp", "mdpConfirmation")
    });
  }

  inscrire() {
    if (!this.formulaireInscription.valid) {
      return;
    }

    let courriel = this.formulaireInscription.get('courriel')?.value;
    let mdp = this.formulaireInscription.get('mdp')?.value;

    this.enChargement = true;

    this.authService.inscrire(courriel, mdp).subscribe(reponse => {  // TODO : expression dépréciée.. modifier la structure.
      this.enChargement = false;
      this.snackBar.open('Inscription complétée !', 'Fermer');
      this.router.navigate(['produits']);
    }, (erreurMessage : HttpErrorResponse) => {
      this.enChargement = false;
      this.snackBar.open(erreurMessage.error, 'Fermer');
    });
  }

  gererEntrer(e: { keyCode: number; }){
    if(e.keyCode === 13){
       this.inscrire();
    }
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}