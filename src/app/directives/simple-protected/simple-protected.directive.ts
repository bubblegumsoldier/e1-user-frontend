import {Directive, ElementRef} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {Router, NavigationEnd} from "@angular/router";
import {Location} from "@angular/common";
import { filter } from 'rxjs/operators';

@Directive({
    selector: '[simple-protected]'
})

export class SimpleProtectedDirective {

    private el :ElementRef;

    constructor(el: ElementRef, private authService: AuthService ,private router: Router, private location: Location) {
        this.el = el;
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.check(true);
        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe(e => this.ngOnChanges());
    }

    private check(shallow :boolean = false) :void
    {
        this.hide();
        if (this.authService.isLoggedIn())
        {
            this.show();
            console.log("authenticated");
            if(!shallow)
                this.router.navigateByUrl("/");
        }else
        {
            console.log("not authenticated");
            //this.location.replaceState('/');
            if(!shallow)
                this.router.navigateByUrl('auth');
        }
    }

    private hide() :void
    {
        this.el.nativeElement.style.display = "none";
        this.el.nativeElement.style.pointerEvents = "none";
    }

    private show() :void
    {
        this.el.nativeElement.style.display = "initial";
        this.el.nativeElement.style.pointerEvents = "auto";
    }

    ngOnChanges()
    {
        this.check(true);
    }
}