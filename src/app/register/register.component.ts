import { Component } from '@angular/core';
import { IDeactivateComponent } from '../deactivate.guard';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm.validators.ts';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles:[`input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border:2px solid green;}`]
})
export class RegisterComponent implements IDeactivateComponent {
  userName: any = "";
  password: any = "";
  confirmPassword: any = "";
  email: any = "";
  mobile: any = "";
  retUrl: any = "home";
  isSubmitted: boolean = false;

  constructor(private userService: UserService, private service: LoginService, private route: ActivatedRoute, private router: Router){}

  submitForm() {
    var body={
      uname: this.userName,
      pass: this.password,
      cpass: this.confirmPassword,
      mail: this.email,
      mobile: this.mobile
    }
    this.userService.addUserInformation(body).subscribe(data => {
      alert("Form submitted");
      this.isSubmitted = true;
      this.router.navigateByUrl('/login');
    })
  }

  canExit(): boolean {
    if (this.isSubmitted) {
      return true;
    } else {
      if (confirm("You are about to leave registration page. Press 'yes' to continue")) {
        return true;
      } else {
        return false;
      }
    }
  }
}
