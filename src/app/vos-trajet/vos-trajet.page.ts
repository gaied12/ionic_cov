import { Component, OnInit } from '@angular/core';
import { MapboxServiceService, Feature } from '../mapbox-service.service';

@Component({
  selector: 'app-vos-trajet',
  templateUrl: './vos-trajet.page.html',
  styleUrls: ['./vos-trajet.page.scss'],
})
export class VosTrajetPage implements OnInit {


  ngOnInit() {
    
  }
    constructor(private mapboxService: MapboxServiceService) {}

  addresses: string[] = [];
  selectedAddress = null;

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

  onSelect(address: string) {
    this.selectedAddress = address;
    this.addresses = [];
  }
  getA(){
    console.log(this.selectedAddress);
  }


}