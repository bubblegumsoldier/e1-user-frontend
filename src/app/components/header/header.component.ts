import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'e1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerType :number = 1;

  constructor(private router: Router, private authService :AuthService) { }

  ngOnInit() {
    this.router.events.subscribe(event => this.onRouterUpdated(event));
  }

  onRouterUpdated(event)
  {
    // if(this.router.url == "/")
    // {
    //   this.headerType = 0;
    // }else
    // {
    //   this.headerType = 1;
    // }

    // if(this.router.url.startsWith("/auth"))
    // {
    //   this.headerType = 2;
    // }
  }

  logout()
  {
    this.authService.logOut();
    this.router.navigateByUrl("/auth");
  }

  onLogoClicked()
  {
    this.router.navigateByUrl("/");
  }

}
