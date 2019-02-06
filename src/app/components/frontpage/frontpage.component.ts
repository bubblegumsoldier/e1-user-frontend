import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'e1-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private router :Router, private authService: AuthService) { }

  ngOnInit() {
    console.log("ngOnInitFrontpageComponent");
    this.authService.isAuthenticated().then(_ => {
        console.log("authenticated");
        //this.router.navigateByUrl("/");
    }).catch(e => {
        console.log("not authenticated " + e);
      //this.location.replaceState('/');
      this.router.navigateByUrl('auth');
    });
  }

}
