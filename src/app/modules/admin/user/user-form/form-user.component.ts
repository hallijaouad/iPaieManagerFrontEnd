
import { Component, OnInit, Inject, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User, UserService, passwordMatchValidator } from '@app/core';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})

export class UserFormComponent implements OnInit {
  utilisateur: User = new User();
  userForm: FormGroup;
  userFormTitre = 'Nouveau utilisateur';
  displayUserGroup = false;
  // regex validation email
  validateEmail = '[a-z0-9._-]+[@]+[a-z0-9-]+[.]+[a-z]{2,6}';
  constructor(
    public http: HttpClient,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserFormComponent>,
    //private userGroupService: UtilisateursGroupsService,
    private userService: UserService,
    private router: Router, private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }




  ngOnInit() {

    this.userForm = this.formBuilder.group({
      'nom': ['', Validators.required],
      'prenom': ['', ''],
      'tel': ['', ''],
      'email': ['', [Validators.required, Validators.pattern(this.validateEmail)]],

      'passwordGroup': this.formBuilder.group(
        {
          'password': ['', [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(20)]
          ],
          'passwordConfirm': ['',
              [Validators.required]
          ],
        },
        { validator: passwordMatchValidator }
      )

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
          return 'Le nom est obligatoire';
        }
        break;
      case 'email':
        if (attr.hasError('required')) {
          return 'L\'email est obligatoire';
        } else if (attr.hasError('pattern')) {
          return 'L\'email est invalide';
        }
        break;
      case 'passwordGroup.password':

        if (attr.hasError('required')) {
          return 'Le mot de passe est <obligatoire></obligatoire>';
        } else if (attr.hasError('minlength') || attr.hasError('maxlength')) {
          return 'Le mot de passe doit avoir entre 8 et 100 caractéres';
        } else if (attr.hasError('mismatch')) {
          return 'Le mot de passe et confirmation ne sont pas identique';
        }
        break;
      case 'passwordGroup.passwordConfirm':
        if (attr.hasError('required') || attr.hasError('pwdmismatch')) {
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
    this.userService.store(user).subscribe(res => this.doUpdateIhm(res));
  }

  doUpdateIhm(res) {
    if (res) {
      //alert(this.data.pk_utilisateur);
      this.dialogRef.close();
    }
  }



}
