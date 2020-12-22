import { Reservation } from './../reservation';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PubService } from '../service/pub.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
idPub:any;
idUser:any
distance:any;
depart:any;
time:any;
destination;
res:Reservation=new Reservation();

  constructor(private route:ActivatedRoute,private pubService:PubService) { 
    this.idUser=localStorage.getItem('idUser');
    this.idPub=this.route.snapshot.paramMap.get('id');

 
  }

  ngOnInit() {

    console.log(this.res);
    this.pubService.getPub(this.idPub).subscribe(res=>{

 this.distance=res['trajet']['total_distance'] ;
 this.time=res['trajet']['total_time'];
 this.depart=res['depart'];
 this.destination=res['destination'];


 console.log(this.distance);


    })
  

  }
  addRes(){
    this.res.userId=+this.idUser;
    this.res.publicationId=+this.idPub ;
    this.pubService.addRes(this.res).subscribe(data=>{

      console.log(data);

    })


    

  }

}
