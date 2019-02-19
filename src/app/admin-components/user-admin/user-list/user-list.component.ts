import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { UserManagerService } from '../../../services/user-manager/user-manager.service';
import { User } from '../../../model/User';

@Component({
  selector: 'e1-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  allUsers :User[];

  users = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  statusMessage :string = "";

  constructor(private router :Router, private userManagerService :UserManagerService) { }

  ngOnInit() {
    this.updateByQuery("");
    this.userManagerService.getAllUsers().toPromise().then(users => {
      console.log(users);
      this.allUsers = users;
      this.updateByQuery("");
    }).catch(error => {
      this.statusMessage = error.message;
    });
  }

  onSelect(evt)
  {
    let selectedUser = evt.selected[0];
    console.log(selectedUser.objectId);
    this.router.navigate(['admin', 'edit', 'user', selectedUser.objectId], { preserveQueryParams: true });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.updateByQuery(val);
  }

  updateByQuery(query :string)
  {
    if(!this.allUsers)
    {
      this.users = [];
      return;
    }
    console.log(query);
    // filter our data
    this.users = this.allUsers.filter(d => {
      return d.email.toLowerCase().indexOf(query.toLowerCase()) !== -1 || d.objectId.toLowerCase().indexOf(query.toLowerCase()) !== -1  || d.username.toLowerCase().indexOf(query.toLowerCase()) !== -1 ;
    });
    console.log(this.users);
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
