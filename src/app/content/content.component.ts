/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;

  constructor(private ts: TourService) { }

  ngOnInit() {
    setTimeout(() =>{
      const mapProp = {
        center: new google.maps.LatLng(52.0120184, 8.5977109),
        zoom: 15,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      this.marker = new google.maps.Marker({
        map: this.map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: {lat: 52.0122184, lng: 8.5982909}
      });
      this.marker.addListener('click', this.toggleBounce);
    }, 1000);
  }

  toggleBounce() {
    if (this.marker.getAnimation() !== null) {
      this.marker.setAnimation(null);
    } else {
      this.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  goToYourXpert() {
    window.open('https://www.yourxpert.de/xpert/steuerberater/ingo.kneisel', '_blank');
  }

  scrollTo(param) {
    const height = document.documentElement.clientHeight * param;
    window.scrollTo(0, height);
  }

  startTour() {
    this.ts.tourActive = true;
    this.scrollTo(0.70);
    setTimeout(() => {
      if (this.ts.stopped === true) {
        return;
      }
      this.scrollTo(1.70);
      setTimeout(() => {
        if (this.ts.stopped === true) {
          return;
        }
        this.scrollTo(2.70);
        setTimeout(() => {
          if (this.ts.stopped === true) {
            return;
          }
          this.scrollTo(3.70);
          setTimeout(() => {
            if (this.ts.stopped === true) {
              return;
            }
            this.scrollTo(4.70);
            setTimeout(() => {
              if (this.ts.stopped === true) {
                return;
              }
              this.scrollTo(5.8250);
              this.ts.tourActive = false;
            }, 5000);
          }, 5000);
        }, 5000);
      }, 5000);
    }, 5000);
  }

}
