import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'e1-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username :string;
  password :string;
  errorMsg :string = "";

  loading :boolean;

  constructor(private authService :AuthService, private router :Router) { }

  ngOnInit() {
  }

  keyDown(event) {
    if(event.keyCode == 13) {
      this.login();
    }
  }

  login()
  {
    if(this.loading) return;
    this.loading = true;
    this.authService.loginWithCredentials(this.username, this.password)
      .then(res => {
        console.log("RES!");
        this.router.navigateByUrl("/");
      })
      .catch(err => {
        console.log("CATCH!");
        this.loading = false;
        this.errorMsg = "Falscher Benutzername oder Passwort"
      });
  }

}
