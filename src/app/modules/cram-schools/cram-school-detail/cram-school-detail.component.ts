import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CramSchoolService } from '../../../services/cram-school.service';
import { CramSchool } from '../../../models/CramSchool';
import {Location} from "@angular/common";

@Component({
  selector: 'app-cram-school-detail',
  templateUrl: './cram-school-detail.component.html',
  styleUrls: ['./cram-school-detail.component.scss']
})
export class CramSchoolDetailComponent implements OnInit {
  // Component
  editMode = false;

  // Template
  selectedCramSchool?: CramSchool | undefined;

  constructor(private route: ActivatedRoute,
              private cramSchoolService: CramSchoolService,
              private location: Location
  ) {}

  ngOnInit(): void {
    const cramSchoolSuffix = this.route.snapshot.paramMap.get('cramSchoolSuffix');
    this.cramSchoolService.getCramSchoolBySuffix(cramSchoolSuffix)
    .subscribe(cramSchool => this.selectedCramSchool = cramSchool);
  }

  goBack(): void {
    this.location.back();
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges(): void {
    // Get current CramSchool from URI
    const cramSchoolSuffix = this.route.snapshot.paramMap.get('cramSchoolSuffix');

    console.log(this.selectedCramSchool);
    //Update CramSchool by suffix, passing the selectedCramSchool with the current changes as parameter
    this.cramSchoolService.updateCramSchoolBySuffix(cramSchoolSuffix, this.selectedCramSchool)
    .subscribe(cramSchool => this.selectedCramSchool = cramSchool);
    // The subscribe method is used to update the selectedCramSchool with the new values that come from the request
  }

  // ngOnInit(): void {
  //   this.selectedCramSchool$ = this.route.paramMap.pipe(
  //     // Extract 'cramSchoolSuffix' parameter from route parameters
  //     map(params => params.get('cramSchoolSuffix')),
  //     // Fetch cram school details using the extracted 'cramSchoolSuffix'
  //     switchMap(cramSchoolSuffix => this.cramSchoolService.getCramSchoolBySuffix(cramSchoolSuffix))
  //   );
  // }
}
