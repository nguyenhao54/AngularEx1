import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1Tuan2Component } from './bai1-tuan2.component';

describe('Bai1Tuan2Component', () => {
  let component: Bai1Tuan2Component;
  let fixture: ComponentFixture<Bai1Tuan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai1Tuan2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai1Tuan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
