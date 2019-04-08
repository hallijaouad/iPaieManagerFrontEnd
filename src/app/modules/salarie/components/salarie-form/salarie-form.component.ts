
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Salarie,  SalarieService} from '@app/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salarie-form',
  templateUrl: './salarie-form.component.html',
  styleUrls: ['./salarie-form.component.scss']
})
export class SalarieFormComponent implements OnInit {

  formTitle = 'Nouveau salarié';
  salarieForm: FormGroup;
  salarie: Salarie = new Salarie();

  constructor(
    private salarieService: SalarieService,
    private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.doCreateForm();
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.formTitle = "Modification du salarié"
      this.salarieService.getSalarie(id).subscribe(res => this.updateSalarieData(res));
    }
  }

  updateSalarieData(res){
    this.salarie = res;
  }

  doCreateForm(){
    this.salarieForm = this.formBuilder.group({
      'id': [''],
       // validation champ matricule
      'matricule': ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ])],
        // validation champ prénom
      'nom': ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250)
        ])],

      // validation champ prénom
      'prenom': ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250)
        ])],

      // validation champ prénom
      'date_embauche': ['',
        Validators.compose([
          Validators.required

        ])],
      // validation champ email
      'email': ['',
        Validators.compose([
          Validators.required,
          Validators.email,
        ])],
      // validation champ mobile
      'mobile': ['']
    });
  }

  doSaveSalarie(salarie: Salarie) {
    this.salarieService.store(salarie).subscribe(res => this.doUpdateIhm(res));
  }


  doUpdateIhm(res) {
    this.router.navigate(['/salaries']);
  }

  /**
  * Validation message error
  */
  getFormMessageError(input) {
    const attr = this.salarieForm.get(input);
    switch (input) {
      case 'matricule':
        if (attr.hasError('required')) {
          return 'le matricule du salarié est obligatoire.';
        } else if (attr.hasError('minlength') || attr.hasError('maxlength')) {
          return 'le matricule doit avoir entre 5 et 20 caractéres alphanumérique';
        }
        break;
      case 'nom':
        if (attr.hasError('required')) {
          return 'la nom du salarié est obligatoire.';
        } else if (attr.hasError('minlength') || attr.hasError('maxlength')) {
          return 'la nom doit avoir entre 3 et 250 caractéres alphanumérique';
        }
        break;
      case 'prenom':
        if (attr.hasError('required')) {
          return 'la prénom du salarié est obligatoire.';
        } else if (attr.hasError('minlength') || attr.hasError('maxlength')) {
          return 'la pénnom doit avoir entre 3 et 250 caractéres alphanumérique';
        }
        break;
      case 'date_embauche':
        if (attr.hasError('required')) {
          return 'la date d\embauche  est obligatoire.';
        }
        break;
      case 'email':
        if (attr.hasError('required')) {
          return 'L\email est obligatoire.';
        }
        break;
    }
    return '';
  }

}
