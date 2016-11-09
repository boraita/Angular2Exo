import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Output() detailsForm = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitForm(form: any): void {
    console.log('Normal Form Data', form);
    this.detailsForm.emit({
      value: form
    });
  }
}
