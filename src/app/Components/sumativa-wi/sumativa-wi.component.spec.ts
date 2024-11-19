import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumativaWiComponent } from './sumativa-wi.component';

describe('SumativaWiComponent', () => {
  let component: SumativaWiComponent;
  let fixture: ComponentFixture<SumativaWiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumativaWiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumativaWiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
