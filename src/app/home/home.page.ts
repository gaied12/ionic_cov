import { UserService } from './../service/user.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PubService } from '../service/pub.service';
import { Publication } from '../model/publication';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public listPub:any=[];
  staut=false ;
  

  constructor(private menu:MenuController,private userservice:UserService,private pubService:PubService) { 
    this.menu.enable(true,'custom');
    
  }

  ngOnInit() {
    console.log(localStorage.getItem('idUser'))
    this.pubService.Pub().subscribe(list=>{

this.listPub=list ;
      console.log(this.listPub);

    });


    

  }
  toDate(date:String) :String{
    return date.substr(0,10);


  }
  toTime(date:String) :String{
    return date.substr(11,15);


    

  }
  verifPlace(nbPlace:number):boolean{
    if (nbPlace >0){
      return true;
    } else{
      return false ;
    }

  }



    

  }
  
