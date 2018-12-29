import {Directive, ElementRef} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";

@Directive({
  selector: '[e1WriteProtected]'
})
export class WriteProtectedDirective {

  private el :ElementRef;

    constructor(el: ElementRef, private authService: AuthService) {
        this.el = el;
        this.hide();
        console.log("hiding write protected initially");
        authService.isAuthenticatedForWrite().then(_ => {
          this.show();
        }).catch(_ => {
          this.hide();
        });
    }

    private hide() :void
    {
        this.el.nativeElement.style.display = "none";
    }

    private show() :void
    {
        this.el.nativeElement.style.display = "";
    }

}
