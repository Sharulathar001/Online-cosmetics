import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

 export interface IDeactivateComponent
 {
  canExit:()=>boolean;
 }
export class DeactivateGuard implements CanDeactivate<unknown>{
  canDeactivate(
    //which component this is going to apply like login
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    // to get the value of the currentroute
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): boolean {

      return component.canExit?component.canExit():false;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
