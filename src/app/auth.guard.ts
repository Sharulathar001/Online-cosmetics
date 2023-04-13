import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { RouterModule, Router } from '@angular/router';




// since it is service the anetation is @injectable
@Injectable({
  // root is where is could be accessed
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,CanActivateChild{
  constructor(private service:LoginService, private router:Router){}
  canActivateChild(
    childroute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log("can activate child");
      if(!this.service.isAdminUser())
      {
        alert("You are not admin and not allowed to edit the product");
        return false;
      }
    return true;
  }

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean{
    if(!this.service.isUserLoggedIn())
    {
      alert("you are not logged in to view the product");
      this.router.navigate(["login"],{queryParams:{retUrl:route.url}});
      return false;
    }
    return true;
    }


}
