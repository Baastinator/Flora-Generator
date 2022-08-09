import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtypeSelectorComponent } from './subtype-selector.component';

describe('SubtypeSelectorComponent', () => {
  let component: SubtypeSelectorComponent;
  let fixture: ComponentFixture<SubtypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtypeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
