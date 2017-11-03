///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
///<reference path="../../node_modules/@angular/forms/src/validators.d.ts"/>

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'form-validation',
  template : ' ./app.formvalidations.html'
})
export class FormValidationComponent {
  complexForm: FormGroup=null;

/*  firstName:string="";
  lastName:string="";
  gender:string="";
  hiking:string="";
  running:string=""
  swimming:string="";
constructor() {
  let _builder = new FormBuilder();
  this.complexForm=_builder.group({})

  this.complexForm.addControl('nameControl',new FormControl('',Validators.required()));
}*/
 /* constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'firstName' : ' ',
    'lastName': ' ',
    'gender' : 'Female',
    'hiking' : false,
      'running' : false,
      'swimming' : false
  });
  }
*/
  submitForm(value: any){
    console.log(value);
  }
}
