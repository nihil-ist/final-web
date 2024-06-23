import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideopipeComponent } from './videopipe.component';

describe('VideopipeComponent', () => {
  let component: VideopipeComponent;
  let fixture: ComponentFixture<VideopipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideopipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideopipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
