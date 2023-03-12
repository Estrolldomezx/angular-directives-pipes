import { Directive, HostListener } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[appTrimValue]'
})
export class TrimValueDirective {

  constructor(
    private formGroup: FormGroupDirective) {
      
    
    }

  ngOnInit(): void {
  // Object.keys(this.formGroup?.form?.controls).forEach((key) => {
  //   if (typeof this.formGroup.form.controls[key].value == 'string') {
  //     this.formGroup.form.controls[key].setValue(this.formGroup.form.controls[key].value.trim())
  //   }
  // })
  }

  @HostListener('focusout') onClick() {
    if (this.formGroup.dirty) {
      console.log('check blur ' + Object.keys(this.formGroup?.form?.controls));
      Object.keys(this.formGroup?.form?.controls).forEach((key) => {
        if (typeof this.formGroup.form.controls[key].value == 'string') {
          this.formGroup.form.controls[key].setValue(this.formGroup.form.controls[key].value.trim())
        }
      })
    }
  }

}
