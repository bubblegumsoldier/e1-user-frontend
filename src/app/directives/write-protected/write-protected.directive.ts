import {Directive, ElementRef} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import { filter } from 'rxjs/operators';
import {Router, NavigationEnd} from "@angular/router";

@Directive({
  selector: '[e1WriteProtected]'
})
export class WriteProtectedDirective {

  private el :ElementRef;

    constructor(el: ElementRef, private authService: AuthService, private router: Router) {
        this.el = el;
        this.hide();
        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe(e => this.ngOnChanges());
        console.log("hiding write protected initially");
        this.check();
    }

    private check() :void
    {
      if(this.authService.hasAnyWriteCapability())
      {
        this.show();
        return;
      }
      this.hide();
    }

    private hide() :void
    {
        this.el.nativeElement.style.display = "none";
    }

    private show() :void
    {
        this.el.nativeElement.style.display = "";
    }

    ngOnChanges()
    {
        this.check();
    }

}
