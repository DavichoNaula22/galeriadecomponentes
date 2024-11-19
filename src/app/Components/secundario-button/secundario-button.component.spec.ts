import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundarioButtonComponent } from './secundario-button.component';

describe('SecundarioButtonComponent', () => {
  let component: SecundarioButtonComponent;
  let fixture: ComponentFixture<SecundarioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecundarioButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecundarioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
