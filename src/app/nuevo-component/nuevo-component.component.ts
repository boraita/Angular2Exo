import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-nuevo-component',
  templateUrl: './nuevo-component.component.html',
  styleUrls: ['./nuevo-component.component.css']
})
export class NuevoComponentComponent implements OnInit {

  private normalForm: boolean;
  private reactiveForm: boolean;
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.jwt = localStorage.getItem('id_token');
    this.decodedJwt = this.jwt;
  }

  ngOnInit() {

    this.normalForm = true;
    this.reactiveForm = true;
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
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

  descriptionForm($event) {
    console.log('Padre: ', JSON.stringify($event));
  }
}
