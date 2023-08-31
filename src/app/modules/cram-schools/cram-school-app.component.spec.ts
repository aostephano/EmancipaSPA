import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CramSchoolAppComponent } from './cram-school-app.component';

describe('CramSchoolAppComponent', () => {
  let component: CramSchoolAppComponent;
  let fixture: ComponentFixture<CramSchoolAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CramSchoolAppComponent]
    });
    fixture = TestBed.createComponent(CramSchoolAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
