import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-toolbar-sidenav',
  templateUrl: './toolbar-sidenav.component.html',
  styleUrls: ['./toolbar-sidenav.component.scss']
})
export class ToolbarSidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
