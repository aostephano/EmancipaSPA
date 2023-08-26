import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetailComponent } from './about-detail.component';

describe('AboutDetailComponent', () => {
  let component: AboutDetailComponent;
  let fixture: ComponentFixture<AboutDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutDetailComponent]
    });
    fixture = TestBed.createComponent(AboutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
