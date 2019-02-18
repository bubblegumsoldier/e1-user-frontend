import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AccessUnit } from '../../../model/AccessUnit';
import { AccessUnitManagerService } from '../../../services/access-unit-manager/access-unit-manager.service';

@Component({
  selector: 'e1-edit-access-unit',
  templateUrl: './edit-access-unit.component.html',
  styleUrls: ['./edit-access-unit.component.css']
})
export class EditAccessUnitComponent implements OnInit {

  id :string = null;

  loading :boolean = true;

  accessUnit :AccessUnit = null;

  statusMessage :string = "";

  static DEFAULT_NAME = "Gruppenname";

  constructor(private route: ActivatedRoute, private accessUnitManagerService :AccessUnitManagerService, private router :Router) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.initializeAccessUnit();
    });
  }


  initializeAccessUnit()
  {
    if(this.id === "new")
    {
      this.accessUnit = new AccessUnit();
      this.accessUnit.name = EditAccessUnitComponent.DEFAULT_NAME;
      this.loading = false;
      return;
    }

    this.accessUnitManagerService.getAccessUnit(this.id).toPromise().then(accessUnit => {
        console.log(accessUnit);
        this.setAccessUnit(accessUnit);
      }).catch(e => {
      this.statusMessage = e.message;
      this.loading = false;
    });
  }

  setAccessUnit(accessUnit :AccessUnit)
  {
    this.accessUnit = accessUnit;
    this.loading = false;
  }

  save()
  {
    if(this.id === "new")
    {
      this.accessUnitManagerService.createAccessUnit(this.accessUnit).toPromise().then(accessUnit => {
        this.router.navigate(['admin', 'edit', 'accessUnit', accessUnit._id], { preserveQueryParams: true });
      });
      return;
    }
    this.accessUnitManagerService.saveAccessUnit(this.id, this.accessUnit).toPromise().then(_ => {
      this.statusMessage = "Erfolgreich gespeichert"
    }).catch(error => {
      this.statusMessage = error.message;
    })
  }
}
