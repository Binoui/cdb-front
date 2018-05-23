import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerFormEditComponent } from './computer-form-edit.component';

describe('ComputerFormEditComponent', () => {
  let component: ComputerFormEditComponent;
  let fixture: ComponentFixture<ComputerFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
