import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaquesComponent } from './destaques.component';

describe('DestaquesComponent', () => {
  let component: DestaquesComponent;
  let fixture: ComponentFixture<DestaquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestaquesComponent]
    });
    fixture = TestBed.createComponent(DestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
