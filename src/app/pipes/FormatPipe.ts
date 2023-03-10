import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}