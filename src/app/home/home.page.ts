import { UserService } from './../service/user.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  

  constructor(private menu:MenuController,private userservice:UserService) { 
    this.menu.enable(true,'custom');
    
  }

  ngOnInit() {
    

  }


    

  }
  
