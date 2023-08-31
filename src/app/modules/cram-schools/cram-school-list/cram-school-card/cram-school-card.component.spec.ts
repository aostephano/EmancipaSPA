import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CramSchoolCardComponent } from './cram-school-card.component';

describe('CramSchoolDetailComponent', () => {
  let component: CramSchoolCardComponent;
  let fixture: ComponentFixture<CramSchoolCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CramSchoolCardComponent]
    });
    fixture = TestBed.createComponent(CramSchoolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
