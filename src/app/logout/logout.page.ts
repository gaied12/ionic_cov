import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
 

}
