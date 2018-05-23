import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConnectionFormComponent } from './user-connection-form.component';

describe('UserConnectionFormComponent', () => {
  let component: UserConnectionFormComponent;
  let fixture: ComponentFixture<UserConnectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConnectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConnectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
