import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchHandler } from '../../services/search-handler/e1-search-handler.service';

@Component({
  selector: 'e1-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.css'],
  providers: [SearchHandler]
})
export class GuidelineComponent implements OnInit {

  id :number = -1;

  guideline = null;

  levelSelectionInput = null;

  constructor(private route: ActivatedRoute, private router :Router, private searchHandler :SearchHandler)
  { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = params['id'];
          this.initializeGuideline();
      });
  }

  onBackButtonClicked()
  {
    this.router.navigate(['/results'], {
      queryParams: this.route.queryParams
    });
  }

  initializeGuideline()
  {
    this.guideline = this.searchHandler.getDummyGuideline();
    this.levelSelectionInput = {
      level: this.guideline.level
    };
    console.log(this.levelSelectionInput);
  }

}
