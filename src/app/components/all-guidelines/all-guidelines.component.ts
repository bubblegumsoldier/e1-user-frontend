import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { SearchHandlerService } from '../../services/search-handler/search-handler.service';
import { Guideline } from '../../model/Guideline';

@Component({
  selector: 'e1-all-guidelines',
  templateUrl: './all-guidelines.component.html',
  styleUrls: ['./all-guidelines.component.css']
})
export class AllGuidelinesComponent implements OnInit {

  guidelines :any[] = undefined;

  loading : boolean = false;

  constructor(private searchHandler :SearchHandlerService, private router :Router) { }

  ngOnInit() {
        this.loading = true;
        this.guidelines = [];
        this.retrieveGuidelineResults();
  }

  ngOnChanges()
  {
    this.guidelines = [];
  }

  retrieveGuidelineResults()
  {
    this.searchHandler.getAllGuidelines(false).subscribe(
      (resultList :Guideline[]) => this.initializeGuidelines(resultList)
    );
  }

  initializeGuidelines(guidelines :any[])
  {
    this.guidelines = guidelines;
    this.loading = false;
  }

  guidelineWasSelected(guideline)
  {
    this.router.navigate(['guideline', guideline._id], { preserveQueryParams: true });
  }

}
