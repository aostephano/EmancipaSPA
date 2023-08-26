import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CramSchoolElementComponent } from './cram-school-element.component';

describe('CramSchoolDetailComponent', () => {
  let component: CramSchoolElementComponent;
  let fixture: ComponentFixture<CramSchoolElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CramSchoolElementComponent]
    });
    fixture = TestBed.createComponent(CramSchoolElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
