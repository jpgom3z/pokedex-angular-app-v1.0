import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterViewComponent } from './filter-view/filter-view.component';



@NgModule({
  declarations: [
    FilterViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    FilterViewComponent
  ]
})
export class FilterModule { }
