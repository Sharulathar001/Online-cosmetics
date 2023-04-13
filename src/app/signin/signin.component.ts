import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirm.validators.ts';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles:[`input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border:2px solid green;}`]
})
export class SigninComponent implements OnInit {

  loginForm=new FormGroup({
    username:new FormControl(""),
    password:new FormControl(),
    cpassword:new FormControl()
  })
  constructor(private fb:FormBuilder) { }
loginForm1=this.fb.group({
  username: [,[Validators.required,Validators.minLength(3)]],
  password:[,[Validators.required,Validators.minLength(8)]],
  cpassword:[,[Validators.required ]]
},{validator:ConfirmedValidator('password','cpassword')})
  ngOnInit() {
  }

}
