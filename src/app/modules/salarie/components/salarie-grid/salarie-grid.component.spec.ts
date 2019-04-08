import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarieGridComponent } from './salarie-grid.component';

describe('SalarieGridComponent', () => {
  let component: SalarieGridComponent;
  let fixture: ComponentFixture<SalarieGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarieGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarieGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
