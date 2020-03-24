import { Component, OnInit, ViewChild, Input } from '@angular/core';
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

  id :string = "";

  @Input() guideline = null;

  levelSelectionInput = null;

  loading :boolean = false;

  @ViewChild('firstlevel') firstLevel;

  constructor(private route: ActivatedRoute, private router :Router, private searchHandler :SearchHandlerService)
  {
   }

  ngOnInit() {
    if(this.guideline !== null)
    {
      this.setGuideline(this.guideline);
      return;
    }
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
    if(this.id === undefined)
    {
      return;
    }
    this.searchHandler.getGuidelineFor(this.id).subscribe((guideline :Guideline) => {
      if(this.guideline !== null)
      {
        return;
      }
      this.setGuideline(guideline)
    });
   
    
    console.log("Added the levels");
  }

  resetSelections()
  {
    if(!this.firstLevel)
    {
      return;
    }
    this.firstLevel.resetSelections();
  }

}
