import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthcareViewComponent } from './healthcare-view.component';


describe('HealthcareViewComponent', () => {
  let component: HealthcareViewComponent;
  let fixture: ComponentFixture<HealthcareViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcareViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
