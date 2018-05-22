import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFormAddComponent } from './company-form-add.component';

describe('CompanyFormAddComponent', () => {
  let component: CompanyFormAddComponent;
  let fixture: ComponentFixture<CompanyFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
