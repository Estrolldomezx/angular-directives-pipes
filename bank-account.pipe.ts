import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'bankAccount',
})
export class BankAccountPipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value === 'string') {
      const _text = value.replace(/-/g, '')
      const pattern = '___-_-_____-_'
      const patternEx = '-'
      let returnText = ''
      for (let i = 0, idx = 0; i < pattern.length; i++) {
        if (_text[idx]) {
          if (pattern[i] === patternEx && pattern[i]) {
            returnText += patternEx
          } else {
            if (!_text[idx].match(/\d/g)) {
              return returnText
            }
            returnText += _text[idx]
            idx++
          }
        }
      }

      return returnText
    }

    return value
  }
}
