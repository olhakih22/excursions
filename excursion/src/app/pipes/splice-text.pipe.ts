import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spliceText'
})
export class SpliceTextPipe implements PipeTransform {

  transform(value: string, show) {
    console.log(value);
    const spl = value.slice(0, 150);
    return spl
  }

}
