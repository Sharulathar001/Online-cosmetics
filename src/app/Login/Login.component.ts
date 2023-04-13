import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmedValidator } from '../confirm.validators.ts';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styles:[`input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border:3px solid green;}`]
})
export class LoginComponent implements OnInit {
  userName: any = "";
  password: any = "";
  // email:any="";
  // mobile:any="";
  retUrl: any = "home";


  constructor(private service: LoginService, private route: ActivatedRoute, private router: Router, private fb:FormBuilder) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(parama => {
      this.retUrl = parama.get('retUrl');
      console.log("LoginComponent/ngOnInit",this.retUrl);
    })
  }
  onLogin(){
    this.service.login(this.userName,this.password).subscribe((data)=>{
      console.log("return to"+this.retUrl);
      if(this.retUrl!=null){
        this.router.navigate([this.retUrl]);
      }
    })
  }

  loginForm1=this.fb.group({
    username: [,[Validators.required,Validators.minLength(3)]],
    password:[,[Validators.required,Validators.minLength(8)]],
    cpassword:[,[Validators.required ]],
    // email:[,[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    // mobile:[,[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]]
  },{validator:ConfirmedValidator('password','cpassword')})
// loggedIn(){
//   this.service.login(this.userName, this.password);
//   //alert("User LoggedIn");


//   if(this.retUrl!=null)
//   {
//     this.router.navigate([this.retUrl]);
//   }
// }
}
