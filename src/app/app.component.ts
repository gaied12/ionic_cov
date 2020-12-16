import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  name:String ;
  img:String ;
  sexe:String ;

  id:number ;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'proposer un trajet',
      url: '/proposer-trajet',
      icon: 'add-circle'
    },
    {
      title: 'Vos trajet',
      url: '/vos-trajet',
      icon: 'car'
    }
  ];
   
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService:UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());

    }
    this.id =+localStorage.getItem('idUser');

    this.userService.getUser(this.id).subscribe(res=>{
    this.name=res['firstName']+' '+res['lastName']
    this.sexe=res['sexe'] ;
    this.img=res['imgPath'] ;
      console.log(this.name);
    })
  }
}
