import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'e1-browsing',
  templateUrl: './browsing.component.html',
  styleUrls: ['./browsing.component.css']
})
export class BrowsingComponent implements OnInit {

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
