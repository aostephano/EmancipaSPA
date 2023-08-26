import {Component, Input} from '@angular/core';
import {CramSchool} from "../../../models/CramSchool";

@Component({
  selector: 'app-cram-school-element',
  templateUrl: './cram-school-element.component.html',
  styleUrls: ['./cram-school-element.component.scss']
})
export class CramSchoolElementComponent {
  @Input() selectedSchool!: CramSchool;
}
