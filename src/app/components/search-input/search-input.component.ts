import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {FormControl} from '@angular/forms';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { E1SearchhandlerService } from '../../e1-searchhandler.service';


@Component({
  selector: 'e1-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  providers:[E1SearchhandlerService]
})
export class SearchInputComponent implements OnInit {

  query        = '';

  private searchUpdated: Subject<string> = new Subject<string>();

  constructor(private router: Router , private E1SearchhandlerService: E1SearchhandlerService) 
  {
    this.searchUpdated.asObservable().pipe(debounceTime(200)).subscribe(val => this.onSearchDebounced(val));
  }

  ngOnInit() {
    this.onSearch('');
  }

  onSearch(query: string) {
    this.searchUpdated.next(query);
    console.log(query);
    this.E1SearchhandlerService.getSearchResultsFor(query);
  }

  onSearchDebounced(query: string)
  {
    console.log("changed to " + query);
    if(query.length <= 0)
    {
      this.router.navigateByUrl('/');
      return;
    }
    this.router.navigate(['/results'], {
      queryParams: {
        query: query
      }
    });
  }

}
