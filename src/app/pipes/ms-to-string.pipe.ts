import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToString'
})
export class MsToStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let dateObj = new Date(value);
    let hours = dateObj.getUTCHours();
    let minutes = dateObj.getUTCMinutes();
    let seconds = dateObj.getSeconds();

    let hourString = hours.toString().padStart(2, '0') + ':';
    let timeString =
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');

    return hourString != '00:' ? hourString + timeString : timeString;
  }

}
