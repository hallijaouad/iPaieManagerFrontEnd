
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User, UserService } from '@app/core';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})

export class FormUserComponent implements OnInit {
  utilisateur: User = new User();
  userForm: FormGroup;
  userFormTitre = 'Nouveau utilisateur';
  displayUserGroup = false;
  // regex validation email
  validateEmail = '[a-z0-9._-]+[@]+[a-z0-9-]+[.]+[a-z]{2,6}';
  constructor(
    public http: HttpClient,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormUserComponent>,
    //private userGroupService: UtilisateursGroupsService,
    //private userService: UtilisateursService,
    private router: Router, private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  emailOrEmpty(control: AbstractControl): ValidationErrors | null {
    return control.value === '' ? null : Validators.email(control);
  }

passwordMatchValidator(g: FormGroup) {
  return g.get('password').value === g.get('passwordConfirm').value
    ? null : { 'mismatch': true };
}

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      'fk_group': ['', Validators.required],
      'nom': ['', Validators.required],
      'prenom': ['', ''],
      'tel': ['', ''],
      'fax': ['', ''],
      'email': ['', [Validators.required, Validators.pattern(this.validateEmail)]],

      'passwordGroup': this.formBuilder.group({
        'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
        'passwordConfirm': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      }, { validator: this.passwordMatchValidator, updateOn: 'blur' }),

    });
    //this.userGroupService.getAllGroups().subscribe(res => this.doInitUserForm(res));
  }




  /**
   * Validation message error
   */
  getFormMessageError(input, pk_utilisateur) {
    const attr = this.userForm.get(input);
    switch (input) {
      case 'nom':
        if (attr.hasError('required')) {
          return 'Le nom est obligatoite';
        }
        break;
      case 'email':
        if (attr.hasError('required')) {
          return 'L\'email est obligatoite';
        } else if (attr.hasError('pattern')) {
          return 'L\'email est invalide';
        }
        break;
      case 'passwordGroup.password':

        if (attr.hasError('required')) {
          return 'Le mot de passe est obligatoire';
        } else if (attr.hasError('minlength') || attr.hasError('maxlength')) {
          return 'Le mot de passe doit avoir entre 8 et 100 caratéres';
        } else if (attr.hasError('mismatch')) {
          return 'Le mot de passe et confirmation ne sont pas identique';
        }
        break;
      case 'passwordGroup.passwordConfirm':
        console.log(attr.validator);
        if (attr.hasError('required')) {
          return 'Le mot de passe est obligatoire';
        } else if (attr.hasError('minlength') || attr.hasError('maxlength')) {
          return 'Le mot de passe doit avoir entre 8 et 100 caratéres';
        } else if (attr.hasError('mismatch')){
          return 'Le mot de passe et confirmation ne sont pas identique';
        }
        break;
    }
    return '';
  }

  doInitUserForm(res) {
    this.displayUserGroup = true;
    //this.userGroups = res;
  }

  doSaveUser(user: User) {
    //this.userService.doSaveUser(user).subscribe(res => this.doUpdateIhm(res));
  }

  doUpdateIhm(res) {
    if (res) {
      alert(this.data.pk_utilisateur);
    }
  }



}
