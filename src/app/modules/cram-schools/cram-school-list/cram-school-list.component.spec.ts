import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CramSchoolListComponent } from './cram-school-list.component';

describe('CramSchoolListComponent', () => {
  let component: CramSchoolListComponent;
  let fixture: ComponentFixture<CramSchoolListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CramSchoolListComponent]
    });
    fixture = TestBed.createComponent(CramSchoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
