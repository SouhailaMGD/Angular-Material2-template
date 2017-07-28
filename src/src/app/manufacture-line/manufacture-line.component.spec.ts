import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureLineComponent } from './manufacture-line.component';

describe('ManufactureLineComponent', () => {
  let component: ManufactureLineComponent;
  let fixture: ComponentFixture<ManufactureLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactureLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
