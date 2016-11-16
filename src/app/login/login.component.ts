import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.token = localStorage.getItem('id_token');
  }

  login(event, username, password) {
    event.preventDefault();
    let headers = new Headers({ 'Content-Type': 'application/json' });

    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3000/session/', body, { headers: headers })
      .subscribe(
        response => {
          let respuesta = response.json();
          localStorage.setItem('id_token', respuesta.token);
          this.router.navigate(['tareas']);
        },
        error => {
          this.router.navigate(['']);
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  logout() {
    localStorage.clear();
    this.token = null;
  }

}
