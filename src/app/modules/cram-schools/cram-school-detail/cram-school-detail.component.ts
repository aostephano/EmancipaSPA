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
  // selectedCramSchool$?: Observable<CramSchool | undefined>;
  selectedCramSchool$?: CramSchool | undefined;

  constructor(private route: ActivatedRoute,
              private cramSchoolService: CramSchoolService,
              private location: Location
  ) {}

  ngOnInit(): void {
    const cramSchoolSuffix = this.route.snapshot.paramMap.get('cramSchoolSuffix');
    this.cramSchoolService.getCramSchoolBySuffix(cramSchoolSuffix)
    .subscribe(cramSchool => this.selectedCramSchool$ = cramSchool);
  }

  goBack(): void {
    this.location.back();
  }

  editCramSchool(): void {
    const cramSchoolSuffix = this.route.snapshot.paramMap.get('cramSchoolSuffix');
    this.cramSchoolService.updateCramSchoolBySuffix(cramSchoolSuffix, this.selectedCramSchool$)
    .subscribe(cramSchool => this.selectedCramSchool$ = cramSchool);
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
