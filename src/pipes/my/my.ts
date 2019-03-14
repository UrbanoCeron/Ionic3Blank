import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'cursoIoniPipe',
})
export class MyPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, defaultText = 'Sin texto' ) {
    return ( value ) ? value : defaultText;
  }
}
