import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSelectionComponent } from './side-selection.component';

describe('SideSelectionComponent', () => {
  let component: SideSelectionComponent;
  let fixture: ComponentFixture<SideSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
