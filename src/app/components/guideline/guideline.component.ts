import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchHandlerService } from '../../services/search-handler/search-handler.service';
import { Guideline } from '../../model/Guideline';

@Component({
  selector: 'e1-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.css'],
  providers: [SearchHandlerService]
})
export class GuidelineComponent implements OnInit {

  id :String = "";

  guideline = null;

  levelSelectionInput = null;

  loading :boolean = false;

  @ViewChild('firstlevel') firstLevel;

  constructor(private route: ActivatedRoute, private router :Router, private searchHandler :SearchHandlerService)
  {
   }

  ngOnInit() {
    this.loading = true;
      this.route.params.subscribe(params => {
          this.id = params['id'];
          console.log(this.id);
          this.initializeGuideline();
      });
  }

  onBackButtonClicked()
  {
    this.router.navigate(['/results'], {
      queryParams: this.route.queryParams
    });
  }

  setGuideline(guideline :Guideline){
    this.loading = false;
    console.log(guideline);
    this.guideline = guideline;
    this.levelSelectionInput = {
      levels: this.guideline.levels
    };
  }

  initializeGuideline()
  {
   // this.guideline = this.searchHandler.getGuidelineFor(this.id);
    this.searchHandler.getGuidelineFor(this.id).subscribe((guideline :Guideline) => this.setGuideline(guideline));
   
    
    console.log("Added the levels");
  }

  resetSelections()
  {
    this.firstLevel.resetSelections();
  }

}
