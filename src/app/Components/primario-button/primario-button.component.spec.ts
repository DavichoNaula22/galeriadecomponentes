import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarioButtonComponent } from './primario-button.component';

describe('PrimarioButtonComponent', () => {
  let component: PrimarioButtonComponent;
  let fixture: ComponentFixture<PrimarioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimarioButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
