import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MapboxServiceService, Feature } from '../mapbox-service.service';
import { Publication } from '../model/publication';
import { PubService } from '../service/pub.service';

@Component({
  selector: 'app-proposer-trajet',
  templateUrl: './proposer-trajet.page.html',
  styleUrls: ['./proposer-trajet.page.scss'],
})
export class ProposerTrajetPage implements OnInit {
  fPub:FormGroup
  pub:Publication ;
  date='2020-12-17T23:33:17.648+01:00';

  constructor(private mapboxService: MapboxServiceService,private fb:FormBuilder,private pubService:PubService) {
    this.fPub=this.fb.group({
      depart: ['', Validators.compose([
        Validators.required,
       ]),
      
      ],
      destination : ['', Validators.compose([
        Validators.required
       ]),
      ],
      heureDeDepart : ['', Validators.compose([
        Validators.required
       ]),
      ],
      trajetDiscription : ['', Validators.compose([
        Validators.required
       ]),
      ],
      dateAnnonce: ['', Validators.compose([
        Validators.required
       ]),
      ],
      nombreDePlace: ['', Validators.compose([
        Validators.required
       ]),
      ]





      
    


     });
    }
  
  

  ngOnInit() {
  }
  addPub(){
    
    this.pub=this.fPub.value ;

    this.pub.userId=+localStorage.getItem('idUser');
    console.log(this.pub);


    this.pubService.add(this.pub).subscribe(res=> {


console.log(res);

    });


    
  }
  addresses: string[] = [];
  addresses1: string[] = [];

  selectedAddress = null;
  selectedAddress1 = null;

  

  search(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      this.mapboxService
        .search_word(searchTerm)
        .subscribe((features: Feature[]) => {
          this.addresses = features.map(feat => feat.place_name);
        });
      } else {
        this.addresses = [];
      }
  }
  search1(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      this.mapboxService
        .search_word(searchTerm)
        .subscribe((features: Feature[]) => {
          this.addresses1 = features.map(feat => feat.place_name);
        });
      } else {
        this.addresses1 = [];
      }
  }


  onSelect(address: string) {
    this.selectedAddress = address;
    this.addresses = [];
  }
  onSelect1(address: string) {
    this.selectedAddress1 = address;
    this.addresses1 = [];
  }
  getA(){
    console.log(this.selectedAddress);
  }


}
