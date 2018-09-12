import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'e1-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.css']
})
export class GuidelineComponent implements OnInit {

  id :number = -1;

  constructor(private route: ActivatedRoute, private router :Router)
  { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = params['id'];
          console.log(this.id);
      });
  }

  onBackButtonClicked()
  {
    this.router.navigate(['/results'], {
      queryParams: this.route.queryParams
    });
  }

}
