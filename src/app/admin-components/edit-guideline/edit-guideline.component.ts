import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchHandlerService } from '../../services/search-handler/search-handler.service';
import { Guideline } from '../../model/Guideline';

@Component({
  selector: 'e1-edit-guideline',
  templateUrl: './edit-guideline.component.html',
  styleUrls: ['./edit-guideline.component.css']
})

export class EditGuidelineComponent implements OnInit {

  id :String = "";

  guideline = null;

  loading :boolean = false;

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
    this.router.navigate(['/admin'], {
      queryParams: this.route.queryParams
    });
  }

  setGuideline(guideline :Guideline){
    this.loading = false;
    console.log(guideline);
    this.guideline = guideline;
  }

  initializeGuideline()
  {
   // this.guideline = this.searchHandler.getGuidelineFor(this.id);
    if(this.id === "new")
    {
      this.guideline = new Guideline();
      this.loading = false;
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

  }

  private saveCurrent()
  {

  }

}
