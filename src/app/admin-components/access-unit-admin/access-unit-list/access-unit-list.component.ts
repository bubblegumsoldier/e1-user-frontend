import { Component, OnInit } from '@angular/core';
import { AccessUnit } from '../../../model/AccessUnit';
import { AccessUnitManagerService } from '../../../services/access-unit-manager/access-unit-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'e1-access-unit-list',
  templateUrl: './access-unit-list.component.html',
  styleUrls: ['./access-unit-list.component.css']
})
export class AccessUnitListComponent implements OnInit {

  accessUnits :AccessUnit[] = undefined;

  statusMessage :string = "";

  constructor(private accessUnitManagerService :AccessUnitManagerService, private router :Router) { }

  ngOnInit() {
    this.accessUnitManagerService.getAllAccessUnits().toPromise().then(accessUnits => {
      this.accessUnits = accessUnits;
    }).catch(error => {
      this.statusMessage = error.message;
    });
  }

  addAccessUnit()
  {
    this.router.navigate(['admin', 'edit', 'accessUnit', 'new'], { preserveQueryParams: true });
  }

}
