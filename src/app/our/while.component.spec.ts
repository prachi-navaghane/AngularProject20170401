/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhileComponent } from './while.component';

describe('WhileComponent', () => {
  let component: WhileComponent;
  let fixture: ComponentFixture<WhileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
