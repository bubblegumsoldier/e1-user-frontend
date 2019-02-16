import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchHandlerService } from '../../../services/search-handler/search-handler.service';
import { Guideline } from '../../../model/Guideline';
import { InsertionService } from '../../../services/insertion/insertion.service';

@Component({
  selector: 'e1-edit-guideline',
  templateUrl: './edit-guideline.component.html',
  styleUrls: ['./edit-guideline.component.css']
})

export class EditGuidelineComponent implements OnInit {

  id :String = "";

  guideline = null;

  transferGuideline = null;

  loading :boolean = false;

  constructor(private route: ActivatedRoute, private router :Router, private searchHandler :SearchHandlerService, private insertionService :InsertionService)
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

  updatePreview()
  {
    console.log("changes!");
    this.transferGuideline = undefined;
    setTimeout(_ => {
      this.transferGuideline = this.guideline;
      console.log(this.guideline);
    }, 500);
  }

  onBackButtonClicked()
  {
    this.router.navigate(['/admin'], {
      queryParams: this.route.queryParams
    });
  }

  setGuideline(guideline :Guideline){
    this.loading = false;
    console.log(guideline);
    this.guideline = guideline;
    if(this.guideline.levels === undefined)
    {
      this.guideline.levels = [];
    }
  }

  initializeGuideline()
  {
   // this.guideline = this.searchHandler.getGuidelineFor(this.id);
    if(this.id === "new")
    {
      this.setGuideline(new Guideline());
      return;
    }
    this.searchHandler.getGuidelineFor(this.id).subscribe((guideline :Guideline) => this.setGuideline(guideline));
   
    
    console.log("Added the levels");
  }

  cancel()
  {
    this.onBackButtonClicked();
  }

  save()
  {
    if(this.guideline._id === undefined)
    {
      this.createNew();
    }else
    {
      this.saveCurrent();
    }
  }

  private createNew()
  {
    this.loading = true;
    this.insertionService.createNewGuideline(this.guideline).then(guideline => {
      this.guideline = guideline;
      this.loading = false;
    });
  }

  private saveCurrent()
  {
    this.loading = true;
    this.insertionService.updateGuideline(this.guideline).then(_ => {
      this.loading = false;
    });
  }

}
