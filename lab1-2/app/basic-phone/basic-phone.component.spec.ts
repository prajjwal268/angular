import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPhoneComponent } from './basic-phone.component';

describe('BasicPhoneComponent', () => {
  let component: BasicPhoneComponent;
  let fixture: ComponentFixture<BasicPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
