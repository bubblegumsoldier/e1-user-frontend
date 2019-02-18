import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchHandlerService } from '../../../services/search-handler/search-handler.service';
import { Guideline } from '../../../model/Guideline';
import { InsertionService } from '../../../services/insertion/insertion.service';
import { AccessUnit } from '../../../model/AccessUnit';
import { AccessUnitManagerService } from '../../../services/access-unit-manager/access-unit-manager.service';

@Component({
  selector: 'e1-edit-guideline',
  templateUrl: './edit-guideline.component.html',
  styleUrls: ['./edit-guideline.component.css']
})

export class EditGuidelineComponent implements OnInit {

  id :String = "";

  accessUnits :any[]= [];

  guideline = null;

  transferGuideline = null;

  loading :boolean = false;

  customAvailableFor :any[] = [];

  constructor(private route: ActivatedRoute, private accessUnitManagerService :AccessUnitManagerService, private router :Router, private searchHandler :SearchHandlerService, private insertionService :InsertionService)
  {
    
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
        this.id = params['id'];
        console.log(this.id);
        this.initializeGuideline();
    });
    console.log("getting access units");
    
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
    this.accessUnitManagerService.getAllAccessUnits().toPromise().then(accessUnits => {
      console.log(accessUnits);
      for(var i = 0;i < accessUnits.length; ++i)
      {
        this.accessUnits.push({
          value: accessUnits[i]._id,
          display: accessUnits[i].name
        });
        this.initializeAvailableForDropdown();
      }
    }).catch(error => {
      alert(error.message);
    });
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

  private preprocessGuideline()
  {
    this.guideline.availableFor = [];
    for(var i = 0;i < this.customAvailableFor.length; ++i)
    {
      this.guideline.availableFor.push(this.customAvailableFor[i].value);
    }
  }

  private initializeAvailableForDropdown()
  {
    this.customAvailableFor = [];
    for(var i = 0;i < this.guideline.availableFor.length; ++i)
    {
      let currentAccessUnit = this.accessUnits.find(value => {
        return value.value === this.guideline.availableFor[i];
      });
      this.customAvailableFor.push(currentAccessUnit);
    }
  }

  private createNew()
  {
    this.loading = true;
    this.preprocessGuideline();
    this.insertionService.createNewGuideline(this.guideline).then(guideline => {
      this.guideline = guideline;
      this.loading = false;
    });
  }

  private saveCurrent()
  {
    this.loading = true;
    this.preprocessGuideline();
    this.insertionService.updateGuideline(this.guideline).then(_ => {
      this.loading = false;
    });
  }

}
