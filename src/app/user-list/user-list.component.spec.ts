import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUserListComponent } from './user-list.component';

describe('TableListComponent', () => {
  let component: CustomUserListComponent;
  let fixture: ComponentFixture<CustomUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
