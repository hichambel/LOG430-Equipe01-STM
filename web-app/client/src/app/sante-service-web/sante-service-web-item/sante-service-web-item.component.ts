import { Component, Input, OnInit } from '@angular/core';
import { SanteServiceWebService } from '../sante-service-web.service';
import { ServiceWeb } from '../serviceweb.model';

@Component({
  selector: 'app-sante-service-web-item',
  templateUrl: './sante-service-web-item.component.html',
  styleUrls: ['./sante-service-web-item.component.sass']
})
export class SanteServiceWebItemComponent implements OnInit {

  @Input()
  serviceWeb!: ServiceWeb;

  enChargement: boolean = false;

  constructor(private santeServiceWebService: SanteServiceWebService) { }

  ngOnInit(): void {
  }

  recupererStatutServiceWeb(id: string) {
    this.enChargement = true;

    this.santeServiceWebService.recupererStatutServiceWebMOCK(id)
    .subscribe({
      next: (serviceWeb: ServiceWeb) => {
        setTimeout(() => {
          this.enChargement = false;
        }, 500);
      },
      error: () => {
        setTimeout(() => {
          this.enChargement = false;
        }, 500);
      },
      complete: () => {
        setTimeout(() => {
        this.enChargement = false;
        }, 500);
      } 
    });
  }

}
