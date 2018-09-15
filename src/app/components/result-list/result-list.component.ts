import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { SearchHandler } from '../../services/search-handler/e1-search-handler.service';

import { Guideline } from '../../model/Guideline';

@Component({
  selector: 'e1-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [SearchHandler]
})
export class ResultListComponent implements OnInit {
  query :string;

  allPublic :boolean = true;

  linkToGuidelineID :number = 123;

  guidelines :Guideline[] = [];

  constructor(private route: ActivatedRoute, private searchHandler :SearchHandler) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
        this.query = queryParams['query'];
        console.log(queryParams);
        this.retrieveGuidelineResults();
    });
  }

  retrieveGuidelineResults()
  {
    this.searchHandler.getSearchResultsFor(this.query).subscribe(this.initializeGuidelines);
  }

  initializeGuidelines(guidelines :Guideline[])
  {
    this.guidelines = guidelines;
  }

}
