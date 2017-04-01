/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MysmallComponent } from './mysmall.component';

describe('MysmallComponent', () => {
  let component: MysmallComponent;
  let fixture: ComponentFixture<MysmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
