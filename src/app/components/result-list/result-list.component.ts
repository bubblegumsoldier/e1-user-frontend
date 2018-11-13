import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { SearchHandlerService } from '../../services/search-handler/search-handler.service';

import { Guideline } from '../../model/Guideline';
import { dummyGuideline } from 'src/app/model/dummyGuideline';

@Component({
  selector: 'e1-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [SearchHandlerService]
})
export class ResultListComponent implements OnInit {
  query :string;

  allPublic :boolean = true;

  linkToGuidelineID :number = 123;

  guidelines :any[] = undefined;

  loading : boolean = false;

  constructor(private route: ActivatedRoute, private searchHandler :SearchHandlerService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
        this.loading = true;
        this.guidelines = [];
        this.query = queryParams['query'];
        this.retrieveGuidelineResults();
    });
  }

  ngOnChanges()
  {
    this.guidelines = [];
  }

  retrieveGuidelineResults()
  {
    this.searchHandler.getSearchResultsFor(this.query).subscribe(
      (resultList :Guideline[]) => this.initializeGuidelines(resultList)
    );
  }

  initializeGuidelines(guidelines :any[])
  {
    this.guidelines = guidelines;
    this.loading = false;
  }

}
