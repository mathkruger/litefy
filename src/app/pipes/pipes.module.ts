import { MsToStringPipe } from './ms-to-string.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberLocale } from './number-locale';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MsToStringPipe, NumberLocale],
  exports: [MsToStringPipe, NumberLocale],
  providers: [MsToStringPipe, NumberLocale]
})
export class PipesModule { }
