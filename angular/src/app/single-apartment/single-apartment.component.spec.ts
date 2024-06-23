import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleApartmentComponent } from './single-apartment.component';

describe('SingleApartmentComponent', () => {
  let component: SingleApartmentComponent;
  let fixture: ComponentFixture<SingleApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleApartmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
