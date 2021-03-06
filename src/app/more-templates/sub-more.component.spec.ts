/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubMoreComponent } from './sub-more.component';

describe('SubMoreComponent', () => {
  let component: SubMoreComponent;
  let fixture: ComponentFixture<SubMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
