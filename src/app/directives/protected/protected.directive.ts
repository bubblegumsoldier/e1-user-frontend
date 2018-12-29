import {Directive, ElementRef} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Directive({
    selector: '[protected]'
})

export class ProtectedDirective {

    private el :ElementRef;

    constructor(el: ElementRef, private authService: AuthService ,private router: Router, private location: Location) {
        this.el = el;
        this.hide();
        authService.isAuthenticated().then(_ => {
            this.show();
        }).catch(_ => {
          this.location.replaceState('/');
          this.router.navigateByUrl('auth');
        });
    }

    private hide() :void
    {
        this.el.nativeElement.style.opacity = "0.5";
        this.el.nativeElement.style.pointerEvents = "none";
    }

    private show() :void
    {
        this.el.nativeElement.style.opacity = "1";
        this.el.nativeElement.style.pointerEvents = "auto";
    }
}