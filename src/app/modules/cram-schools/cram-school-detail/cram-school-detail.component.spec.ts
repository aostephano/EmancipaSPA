import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CramSchoolDetailComponent } from './cram-school-detail.component';

describe('CramSchoolDetailComponent', () => {
  let component: CramSchoolDetailComponent;
  let fixture: ComponentFixture<CramSchoolDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CramSchoolDetailComponent]
    });
    fixture = TestBed.createComponent(CramSchoolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
