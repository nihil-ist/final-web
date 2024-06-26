import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbqueriesComponent } from './dbqueries.component';

describe('DbqueriesComponent', () => {
  let component: DbqueriesComponent;
  let fixture: ComponentFixture<DbqueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbqueriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
