import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meteo } from './meteo.model';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.sass']
})
export class MeteoComponent implements OnInit {

  reponse: any;

  enChargement: boolean = false;

  formulaireMeteo: FormGroup = this.formBuilder.group({
    dateTemperature: new FormControl('', [Validators.required]),
    heureTemperature: new FormControl('', [Validators.required])
  });

  heures: Heure[] = [
        {value: '00', viewValue: '00:00'},
        {value: '01', viewValue: '01:00'},
        {value: '02', viewValue: '02:00'},
        {value: '03', viewValue: '03:00'},
        {value: '04', viewValue: '04:00'},
        {value: '05', viewValue: '05:00'},
        {value: '06', viewValue: '06:00'},
        {value: '07', viewValue: '07:00'},
        {value: '08', viewValue: '08:00'},
        {value: '09', viewValue: '09:00'},
        {value: '10', viewValue: '10:00'},
        {value: '11', viewValue: '11:00'},
        {value: '12', viewValue: '12:00'},
        {value: '13', viewValue: '13:00'},
        {value: '14', viewValue: '14:00'},
        {value: '15', viewValue: '15:00'},
        {value: '16', viewValue: '16:00'},
        {value: '17', viewValue: '17:00'},
        {value: '18', viewValue: '18:00'},
        {value: '19', viewValue: '19:00'},
        {value: '20', viewValue: '20:00'},
        {value: '21', viewValue: '21:00'},
        {value: '22', viewValue: '22:00'},
        {value: '23', viewValue: '23:00'},
      ];

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private meteoService: MeteoService) { }


  ngOnInit(): void {
  }

  rechercherMeteo() {
    if (!this.formulaireMeteo.valid) {
      return;
    }
    this.enChargement = true;

    let dateTemperature = this.formulaireMeteo.get('dateTemperature')?.value;
    let heureTemperature = this.formulaireMeteo.get('heureTemperature')?.value;

    this.meteoService.rechercherMeteo(dateTemperature, heureTemperature).subscribe({
      next: (reponse: any) => {
        //let obj = JSON.parse(reponse[0]);
        //var temp = obj.main.temp;
        //console.log(reponse[0].main);
        this.reponse = reponse;
        this.enChargement = false;
      },
      error: (erreurMessage : HttpErrorResponse) => {
        this.enChargement = false;
        this.snackBar.open(erreurMessage.error, 'Fermer');
      },
      complete: () => {}
    });
  
    this.formulaireMeteo.reset();
  }

}

interface Heure {
  value: string;
  viewValue: string;
}