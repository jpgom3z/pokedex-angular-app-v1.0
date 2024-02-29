import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterViewComponent } from './filter-view.component';

describe('FilterViewComponent', () => {
  let component: FilterViewComponent;
  let fixture: ComponentFixture<FilterViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterViewComponent]
    });
    fixture = TestBed.createComponent(FilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
