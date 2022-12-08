import { FormGroup } from "@angular/forms";

export function MotDePasseConfirmationValidator(mdpControlName: string, mdpConfirmationControlName: string) {
    return (formGroup: FormGroup) => {
      let mdpControl = formGroup.controls[mdpControlName];
      let mdpConfirmationControl = formGroup.controls[mdpConfirmationControlName];

      if (mdpControl.value != mdpConfirmationControl.value) {
        mdpConfirmationControl.setErrors({ 'motDePasseValidator' : true });
      } else {
        mdpConfirmationControl.setErrors(null);
      }
    };
  }
