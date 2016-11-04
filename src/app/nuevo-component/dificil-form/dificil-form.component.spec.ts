/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DificilFormComponent } from './dificil-form.component';

describe('DificilFormComponent', () => {
  let component: DificilFormComponent;
  let fixture: ComponentFixture<DificilFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DificilFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DificilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
