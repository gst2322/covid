import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvAppsComponent } from './sv-apps.component';

describe('SvAppsComponent', () => {
  let component: SvAppsComponent;
  let fixture: ComponentFixture<SvAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
