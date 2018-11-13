import {Directive} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Directive({
    selector: '[protected]'
})

export class ProtectedDirective {

    constructor(private authService: AuthService, private router: Router, private location: Location) {
        authService.isAuthenticated().catch(_ => {
          this.location.replaceState('/');
          this.router.navigateByUrl('auth');
        });
    }
}