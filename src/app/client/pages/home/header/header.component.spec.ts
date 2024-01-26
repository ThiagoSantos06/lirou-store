import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header.component';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Header]
    });
    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
