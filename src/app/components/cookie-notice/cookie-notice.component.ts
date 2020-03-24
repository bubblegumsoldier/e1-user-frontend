import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'e1-cookie-notice',
  templateUrl: './cookie-notice.component.html',
  styleUrls: ['./cookie-notice.component.css']
})
export class CookieNoticeComponent implements OnInit {

  code :string = `
  <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-116288587-5"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-116288587-5');
    </script>
  `;

  confirmed :boolean = false;

  constructor(private cookieService :CookieService) { }

  ngOnInit(): void {
    if(this.cookieService.get("cookie_confirmed") === "1")
    {
      this.confirm();
    }
  }

  confirm()
  {
    this.confirmed = true;
    this.cookieService.set("cookie_confirmed", "1");
    document.head.innerHTML = document.head.innerHTML + this.code;
  }

}
