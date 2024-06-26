import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaFAQComponent } from './ayuda-faq.component';

describe('AyudaFAQComponent', () => {
  let component: AyudaFAQComponent;
  let fixture: ComponentFixture<AyudaFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyudaFAQComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyudaFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
