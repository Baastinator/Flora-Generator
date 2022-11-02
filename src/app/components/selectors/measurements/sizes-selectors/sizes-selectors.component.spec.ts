import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesSelectorsComponent } from './sizes-selectors.component';

describe('SizesSelectorsComponent', () => {
  let component: SizesSelectorsComponent;
  let fixture: ComponentFixture<SizesSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizesSelectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizesSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
