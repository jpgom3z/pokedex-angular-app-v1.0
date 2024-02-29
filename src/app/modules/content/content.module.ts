import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';


@NgModule({
  declarations: [
    ContentListComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ContentListComponent
  ]
})
export class ContentModule { }
