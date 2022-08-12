import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai2SubComponent } from './bai2-sub.component';

describe('Bai2SubComponent', () => {
  let component: Bai2SubComponent;
  let fixture: ComponentFixture<Bai2SubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai2SubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai2SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
