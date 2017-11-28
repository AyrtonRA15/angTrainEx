import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domainOnly'
})
export class DomainOnlyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const domain = value.split('@')[1];
    return domain;
  }

}
