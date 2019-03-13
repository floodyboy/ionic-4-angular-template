import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExample5Page } from './card-example5.page';

describe('CardExample5Page', () => {
  let component: CardExample5Page;
  let fixture: ComponentFixture<CardExample5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExample5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExample5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
