import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstudentComponent } from './newstudent.component';

describe('NewstudentComponent', () => {
  let component: NewstudentComponent;
  let fixture: ComponentFixture<NewstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewstudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
