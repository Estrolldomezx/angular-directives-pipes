import { Pipe, PipeTransform } from '@angular/core'
import { truncate } from 'lodash'

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value?: string, maxLength?: number): string {
    maxLength = maxLength ?? /* number */

    return truncate(value, { length: maxLength })
  }
}
