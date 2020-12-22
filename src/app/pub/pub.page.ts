import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Publication } from '../model/publication';
import { User } from '../model/user';
import { PubService } from '../service/pub.service';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.page.html',
  styleUrls: ['./pub.page.scss'],
})
export class PubPage implements OnInit {
  pub:any ={};
  nbPlace:number;
  user:User =new User();

  id:any ;
  constructor( private route: ActivatedRoute,private pubService:PubService,private rou:Router) { }

  ngOnInit() {
   this.id=this.route.snapshot.paramMap.get('id');
   this.pubService.getPub(this.id).subscribe(res=>{
   this.nbPlace=res['nombreDePlace'];
   console.log(this.nbPlace);

this.pub=res ;
this.user.lastName=res['user']['lastName'] ;
this.user.firstName=res['user']['firstName'] ;
this.user.vMarque=res['user']['vMarque'] ;

    console.log(  this.pub );


   }
    )

  }
  res(){
    this.rou.navigateByUrl(`/pub/${this.id}/reservation`);
  }

}
