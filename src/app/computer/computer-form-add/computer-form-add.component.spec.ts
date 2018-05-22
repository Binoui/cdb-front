import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerFormAddComponent } from './computer-form-add.component';

describe('ComputerFormAddComponent', () => {
  let component: ComputerFormAddComponent;
  let fixture: ComponentFixture<ComputerFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
