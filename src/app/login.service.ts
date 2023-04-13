import { Injectable } from '@angular/core';
import{of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getRegistrationData() {
    throw new Error('Method not implemented.');
  }
  register(userName: any, password: any, email: any, mobile: any) {
    throw new Error('Method not implemented.');
  }

  isLoggedIn:boolean=false;
  userName:String="";
  // password:string="";

  constructor() { }
  login(username:string,password:string)
  {
    this.userName=username;
    // this.password=password;
    this.isLoggedIn=true;
    return of(this.isLoggedIn);
  }
  isUserLoggedIn():boolean{
    //methods of rxjs-->of
    return this.isLoggedIn;
  }
isAdminUser():boolean{
  console.log("un"+this.userName);
  if(this.userName=="admin")
  {
    return true;
  }
  return true;
}
  logoutUser():void{
    this.isLoggedIn=false;
  }
}
