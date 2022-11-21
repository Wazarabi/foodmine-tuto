import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES:any = {
  required: 'Should not be empty',
  email : 'Email is not valid'
}

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit,OnChanges {
  /* loginForm!:FormGroup;
  this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
  });
  ------------> this.loginForm.controls.[email || password];
  */
  @Input()
  control!:AbstractControl; // same type of control we used in the login-page at first
  @Input()
  showErrorsWhen:boolean = true; // same as using *ngIf, 4 readability purposes we avoid too many ngIfs
  errorMessages :string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    // validation status change
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }

  checkValidation(){
    const errors = this.control.errors;
    if(!errors){
      this.errorMessages = [];
      return;
    }
    const errorKeys = Object.keys(errors); // ['required','email']
    this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key]);
  }

}
