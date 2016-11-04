import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dificil-form',
  templateUrl: './dificil-form.component.html',
  styleUrls: ['./dificil-form.component.css']
})
export class DificilFormComponent implements OnInit {

 complexForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'firstName' : [null, Validators.required],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender' : ['Male', Validators.required],
      'hiking' : true,
      'running' : false,
      'swimming' : false
    });
  }

  ngOnInit() {
  }

  submitForm(value: any): void {
    console.log('Reactive Form Data: ');
    console.log(value.firstName);
  }

}
