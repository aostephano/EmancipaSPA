import {Component, OnInit} from '@angular/core';
import {CramSchool} from "../../../models/CramSchool";
import {ActivatedRoute} from "@angular/router";
import {CramSchoolService} from "../../../services/cram-school.service";
import {MessageService} from "../../../services/message.service";

@Component({
  selector: 'app-cram-school-list',
  templateUrl: './cram-school-list.component.html',
  styleUrls: ['./cram-school-list.component.scss']
})
export class CramSchoolListComponent implements OnInit{
  title = 'Cram School Card List';
  cramSchools: CramSchool[] = [];
  selectedCramSchool?: CramSchool;

  constructor(
    private cramSchoolService: CramSchoolService,
    private messageService: MessageService,
    ) {
  }

  ngOnInit(): void {
    this.getSchools();
  }
  getSchools(): void {
    this.cramSchoolService.getSchools().subscribe(
      cramSchools => this.cramSchools = cramSchools
    );
  }

  onSelect(school: CramSchool): void {
    this.messageService.add(`CramSchoolListComponent: Selected school id=${school.uuid}`);
    this.selectedCramSchool = school;
  }
}

