import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3Tuan2Component } from './bai3-tuan2.component';

describe('Bai3Tuan2Component', () => {
  let component: Bai3Tuan2Component;
  let fixture: ComponentFixture<Bai3Tuan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai3Tuan2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai3Tuan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
