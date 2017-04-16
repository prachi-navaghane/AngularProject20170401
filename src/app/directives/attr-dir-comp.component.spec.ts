/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AttrDirCompComponent } from './attr-dir-comp.component';

describe('AttrDirCompComponent', () => {
  let component: AttrDirCompComponent;
  let fixture: ComponentFixture<AttrDirCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrDirCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrDirCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
