import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSmallComponent } from './loading-small/loading-small.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoadingSmallComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [LoadingSmallComponent],
  bootstrap: [LoadingSmallComponent]
})
export class LoadingSpinnerModule { }
