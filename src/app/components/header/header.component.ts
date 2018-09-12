import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'e1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerType :number = 0;

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

  onLogoClicked()
  {
    this.router.navigateByUrl("/");
  }

}
