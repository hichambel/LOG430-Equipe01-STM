import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SanteServiceWebService } from './sante-service-web.service';
import { ServiceWeb } from './serviceweb.model';

@Component({
  selector: 'app-sante-service-web',
  templateUrl: './sante-service-web.component.html',
  styleUrls: ['./sante-service-web.component.sass']
})
export class SanteServiceWebComponent implements OnInit {

  constructor(public titleService: Title, private santeServiceWebService: SanteServiceWebService) { }

  public listeServiceWeb: ServiceWeb[] = [];
  public enChargement: boolean = false;

  ngOnInit(): void {
    this.titleService.setTitle("Page Santé");

    this.santeServiceWebService.serviceWebEmitter.subscribe((servicesWeb: ServiceWeb[]) => {
      this.listeServiceWeb = servicesWeb;
    })

      //this.santeServiceWebService.recupererServiceWebMOCK();
  }

  recupererServicesWeb() {
    this.santeServiceWebService.recupererServiceWeb();
  }

}
