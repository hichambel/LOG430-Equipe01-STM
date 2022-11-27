import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  private utilisateurSub!: Subscription;
  estAuthentifier: boolean = false;
  estMobile: boolean = false;

  constructor(private observer: BreakpointObserver, private authService: AuthService) {
    
  }

  fermerSidenav() {
    if (this.estMobile) {
      this.sidenav.toggle();
    }
  }

  gererSidenav() {
    if (window.innerWidth < 800) {
      setTimeout(() => {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      });
    } else {
      setTimeout(() => {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      });
    }
  }

  deconnecter() {
    this.authService.deconnecter();
  }

  ngOnInit(): void {
    this.gererSidenav();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        setTimeout(() => {
          this.estMobile = true;
          this.sidenav.mode = 'over';
          this.sidenav.close();
        })
      } else if (!res.matches){ // un else serait probablement suffisant
        setTimeout(() => {
          this.estMobile = false;
          this.sidenav.mode = 'side';
          this.sidenav.open();
        })
      }
      
    });
  }

  ngOnDestroy(): void { 
    this.utilisateurSub.unsubscribe();
  }

  nom = 'Equipe 01';
  title = 'Gestionnaire de trajets';
}
