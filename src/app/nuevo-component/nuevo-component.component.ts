import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-component',
  templateUrl: './nuevo-component.component.html',
  styleUrls: ['./nuevo-component.component.css']
})
export class NuevoComponentComponent implements OnInit {

  private normalForm: boolean;
  private reactiveForm: boolean;
  constructor() { }

  ngOnInit() {

    this.normalForm = true;
    this.reactiveForm = true;
  }

  activesForm(form) {
    if (form === 'normal') {
      if (this.normalForm) {
        this.normalForm = false;
      }else {
        this.normalForm = true;
      }
    }else {
      if (this.reactiveForm) {
        this.reactiveForm = false;
      } else {
        this.reactiveForm = true;
      }
    }
  }
}
