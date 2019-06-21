import { AbstractControl } from '@angular/forms';
export function passwordMatchValidator
  (control: AbstractControl): { [key: string]: boolean } {

  // Grab pwd and confirmPwd using control.get
  const pwd = control.get('password');
  const confirmPwd = control.get('passwordConfirm');
  // If FormControl objects don't exist, return null
  if (!pwd || !confirmPwd) {
    return null;
  }

  // If they are indeed equal, return null
  if (pwd.value === confirmPwd.value) {
    return null;
  }
  confirmPwd.setErrors({ pwdmismatch: true });
  // Else return false
  return {
    pwdmismatch: true
  };
}
