// import { FormGroup ,Validator} from "@angular/forms"
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ConfirmedValidator } from '../confirm.validators.ts';


export function ConfirmedValidator(controlName:string,matchingControlName:string) {
  return(formgroup:FormGroup)=>{
    const pass=formgroup.controls[controlName];
    const cpass=formgroup.controls[matchingControlName];
    if(pass.value!=cpass.value)
    {
        cpass.setErrors({conformValidator:true})
    }
    else{
      cpass.setErrors(null);
    }
  }
  
}
