import { Component } from '@angular/core';
import {CRAMSCHOOLS} from "../../../mock/mock-getAllSchools";
import {CramSchool} from "../../../models/CramSchool";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cram-school-list',
  templateUrl: './cram-school-list.component.html',
  styleUrls: ['./cram-school-list.component.scss']
})
export class CramSchoolListComponent {
  title = 'Cram School Card List';
  cramSchools: CramSchool[] = CRAMSCHOOLS;
  selectedCramSchool?: CramSchool;

  constructor(private route: ActivatedRoute) {
  }
  onSelect(school: CramSchool): void {
    this.selectedCramSchool = school;
  }
}

