import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefectMapComponent } from './defect-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DefectMapComponent],
  exports: [
    DefectMapComponent
  ]
})
export class DefectMapModule { }
