import {Component, Input} from '@angular/core';
import {CramSchool} from "../../../../models/CramSchool";

@Component({
  selector: 'app-cram-school-card',
  templateUrl: './cram-school-card.component.html',
  styleUrls: ['./cram-school-card.component.scss']
})
export class CramSchoolCardComponent {
  @Input() selectedSchool!: CramSchool;
}
