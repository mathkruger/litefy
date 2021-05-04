import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Pipe({
    name: 'numberLocale'
})
@Injectable()
export class NumberLocale implements PipeTransform {

    constructor(private translateService: TranslateService) {

    }

    transform(value: number | string, locale: string = 'pt') : string {
        return new Intl.NumberFormat(locale, {
            minimumFractionDigits: 0
          }).format(Number(value));
    }
}