import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
  }

  login(event, username, password) {
    event.preventDefault();
    let headers = new Headers({ 'Content-Type': 'application/json' });

    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3000/session/', body, { headers: headers })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json());
          this.router.navigate(['tareas']);
        },
        error => {
          this.router.navigate(['']);
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

}
