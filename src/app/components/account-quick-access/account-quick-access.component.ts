import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'e1-account-quick-access',
  templateUrl: './account-quick-access.component.html',
  styleUrls: ['./account-quick-access.component.css']
})
export class AccountQuickAccessComponent implements OnInit {

  headerType :number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => this.onRouterUpdated(event));
  }

  onRouterUpdated(event)
  {
    if(this.router.url == "/")
    {
      this.headerType = 0;
    }else
    {
      this.headerType = 1;
    }
  }

}
