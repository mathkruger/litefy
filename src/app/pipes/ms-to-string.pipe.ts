import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToString'
})
export class MsToStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const dateObj = new Date(value);
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();

    const hourString = hours.toString().padStart(2, '0') + ':';
    const timeString =
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');

    return hourString !== '00:' ? hourString + timeString : timeString;
  }

}
