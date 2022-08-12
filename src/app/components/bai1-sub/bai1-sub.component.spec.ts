import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1SubComponent } from './bai1-sub.component';

describe('Bai1SubComponent', () => {
  let component: Bai1SubComponent;
  let fixture: ComponentFixture<Bai1SubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai1SubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai1SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
