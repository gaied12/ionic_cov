import { UserService } from './../service/user.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fReg:FormGroup;
user:User =new User() ;

  constructor(private fb:FormBuilder,private menu:MenuController,private userService:UserService) 
  {
    this.menu.enable(false,'custom');
    this.fReg=this.fb.group({
      userName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
       ]),
      ],
 
firstName : ['', Validators.compose([
  Validators.required
 ]),
],
lastName : ['', Validators.compose([
  Validators.required
 ]),
],

phoneNumber :  ['', Validators.compose([
  Validators.required,
  Validators.pattern('^[0-9]{8,8}$')
 ]),
],

password : ['', Validators.compose([
  Validators.required,
  Validators.minLength(8)
 ]),
],

confPassword :
['', Validators.compose([
  Validators.required,
]),
],   

vMarque :['', Validators.compose([
  Validators.required,
]),
],   
sexe :['', Validators.compose([
  Validators.required,
]),
],   






    },  {
      validator: this.ConfirmedValidator('password','confPassword')
    }




    )
   }
   register(){
    let formObj = this.fReg.value;
    delete formObj.confPassword;
    this.user=formObj;
    this.user.phoneNumber=   +this.fReg.get('phoneNumber').value ;   

console.log(this.user)  
   
     this.userService.add(this.user).subscribe(res=>{
      
      console.log(res)
     }
      
      );



   }





   ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

  ngOnInit() {
  }

}
