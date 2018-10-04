import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchHandlerService } from '../../services/search-handler/search-handler.service';

@Component({
  selector: 'e1-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.css'],
  providers: [SearchHandlerService]
})
export class GuidelineComponent implements OnInit {

  id :number = -1;

  guideline = null;

  levelSelectionInput = null;

  @ViewChild('firstlevel') firstLevel;

  constructor(private route: ActivatedRoute, private router :Router, private searchHandler :SearchHandlerService)
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
  }

  resetSelections()
  {
    this.firstLevel.resetSelections();
  }

}
