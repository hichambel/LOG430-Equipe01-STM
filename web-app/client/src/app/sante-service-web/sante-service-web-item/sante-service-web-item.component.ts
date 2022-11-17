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

  recupererStatutServiceWebParId(id: string) {
    this.enChargement = true;

    this.santeServiceWebService.recupererStatutServiceWebParId(id)
    .subscribe({
      next: () => {
        this.enChargement = false;
      },
      error: () => {
        this.enChargement = false;
      },
      complete: () => {
        this.enChargement = false;
      } 
    });
  }

}
