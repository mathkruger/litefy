import { MsToStringPipe } from './ms-to-string.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MsToStringPipe],
  exports: [MsToStringPipe],
  providers: [MsToStringPipe]
})
export class PipesModule { }
