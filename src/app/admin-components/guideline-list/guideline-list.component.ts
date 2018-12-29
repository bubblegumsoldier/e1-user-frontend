import { Component, OnInit } from '@angular/core';

import { SearchHandlerService } from '../../services/search-handler/search-handler.service';

import { Guideline } from '../../model/Guideline';
import { Router } from '@angular/router';

@Component({
  selector: 'e1-guideline-list',
  templateUrl: './guideline-list.component.html',
  styleUrls: ['./guideline-list.component.css']
})
export class GuidelineListComponent implements OnInit {

  guidelines :any[] = undefined;

  loading : boolean = false;

  constructor(private searchHandler :SearchHandlerService, private router :Router) { }

  ngOnInit() {
    this.retrieveGuidelineResults();
  }

  retrieveGuidelineResults()
  {
    this.loading = true;
    this.searchHandler.getAllGuidelines().subscribe(
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
    this.router.navigate(['admin', 'edit', 'guideline', guideline._id], { preserveQueryParams: true });
  }

  addGuideline()
  {
    this.router.navigate(['admin', 'edit', 'guideline', 'new'], { preserveQueryParams: true });
  }
}
