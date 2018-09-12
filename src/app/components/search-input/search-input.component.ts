import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'e1-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  constructor(private router: Router) {
    
  }

  ngOnInit() {
    this.onSearch('');
  }

  onSearch(query: string) {
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
