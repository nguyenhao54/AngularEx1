import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3SubComponent } from './bai3-sub.component';

describe('Bai3SubComponent', () => {
  let component: Bai3SubComponent;
  let fixture: ComponentFixture<Bai3SubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai3SubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai3SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
