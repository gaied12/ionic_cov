import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fLogin:FormGroup ;

  constructor(contol:MenuController,private bLogin:FormBuilder,private route:Router,private userService:UserService) {
    contol.enable(false,'custom');
    this.fLogin=this.bLogin.group({

     username: [  
         "",
         Validators.compose([
           Validators.required,
           Validators.minLength(8)
         ])
       ],
 
       password: [
         "",
         Validators.compose([Validators.required])
       ],
   
     }
 
 
 
     );
   }

  ngOnInit() {

  }
  login(){
    console.log(this.fLogin.value)

    this.userService.auth(this.fLogin.value).subscribe(res =>{
     
      console.log(res);
      if (res['code']==='98'){
        alert('password or username incorrect');

      }
      else{
        localStorage.setItem('idUser',res['id']);
          this.route.navigateByUrl('home');

      }
      




    })
    
  }

}
