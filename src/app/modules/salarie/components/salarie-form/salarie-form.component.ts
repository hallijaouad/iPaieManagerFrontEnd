
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Salarie,  SalarieService} from '@app/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-salarie-form',
  templateUrl: './salarie-form.component.html',
  styleUrls: ['./salarie-form.component.scss']
})
export class SalarieFormComponent implements OnInit {

  formTitle = 'Nouveau salarié';
  salarieForm: FormGroup;
  salarie: Salarie = new Salarie();

  contrats = [
    { id:1, refext: "DETERMINEE" },
    { id:2, refext: 'INDETERMINEE' }
  ];

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
    }else{
      this.salarie =  new Salarie();
    }
  }

  updateSalarieData(res){
    this.salarie = res;
    console.log(this.salarie.date_embauche)
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

        // validation champ numéro cnss
      'num_cnss': ['',
      Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(5),
        Validators.maxLength(100)
      ])],
      'salaire_brut': ['',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9.]*'),
        ])],

         // validation champ contrat
         'contrat_duree_type': ['',
         Validators.compose([
           Validators.required
         ])],
      // validation champ poste
      'poste_intitule': ['',
      Validators.compose([
        Validators.required
      ])],


 // validation champ comentaire
 'description': [''],


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
    let day = moment(salarie.date_embauche).format("YYYY-MM-DD");
    salarie.date_embauche = day;
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
          return 'la prénom doit avoir entre 3 et 250 caractéres alphanumérique';
        }
        break;
      case 'date_embauche':
        if (attr.hasError('required')) {
          return 'la date d\embauche  est obligatoire.';
        }
        break;
      case 'salaire_brut':
        if (attr.hasError('required') || attr.hasError('pattern')) {
          return 'le montant du salaire brut est invalide.';
        }
        break;
      case 'email':
        if (attr.hasError('required')) {
          return 'L\email est obligatoire.';
        }
        break;
        case 'num_cnss':
        if (attr.hasError('required') || attr.hasError('pattern')) {
          return 'le N° cnss doit avoir entre 5 et 20 chiffres.';
        }
        break;
    }
    return '';
  }

}
