import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFormEditComponent } from './company-form-edit.component';

describe('CompanyFormEditComponent', () => {
  let component: CompanyFormEditComponent;
  let fixture: ComponentFixture<CompanyFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
