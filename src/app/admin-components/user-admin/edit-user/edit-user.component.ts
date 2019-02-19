import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagerService } from '../../../services/user-manager/user-manager.service';
import { UserCapability } from '../../../model/capabilities/UserCapability';

@Component({
  selector: 'e1-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id :string = null;

  loading :boolean = true;

  user :User = null;

  statusMessage :string = "";

  static DEFAULT_NAME = "Benutzername";

  constructor(private route: ActivatedRoute, private userManagerService :UserManagerService, private router :Router) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.initializeUser();
    });
  }


  initializeUser()
  {
    if(this.id === "new")
    {
      this.setUser(new User());
      this.user.username = EditUserComponent.DEFAULT_NAME;
      return;
    }

    this.userManagerService.getUser(this.id).toPromise().then(user => {
        console.log(user);
        this.setUser(user);
      }).catch(e => {
      this.statusMessage = e.message;
      this.loading = false;
    });
  }

  setUser(user :User)
  {
    this.user = user;
    this.loading = false;
    if(!this.user.rights)
    {
      this.user.rights = new UserCapability();
    }
  }

  save()
  {
    if(this.id === "new")
    {
      this.userManagerService.createUser(this.user).toPromise().then(user => {
        this.router.navigate(['admin', 'edit', 'user', user.objectId], { preserveQueryParams: true });
      });
      return;
    }
    this.userManagerService.saveUser(this.id, this.user).toPromise().then(_ => {
      this.statusMessage = "Erfolgreich gespeichert"
    }).catch(error => {
      this.statusMessage = error.message;
    });
  }
}