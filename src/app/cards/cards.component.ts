import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardItem = {
    name: 'Dr. Fatma Azra Yildiz',
    title: 'Art Historian / Software Engineer',
    email: 'fatmaazra@gmail.com',
    phone: '087 394 023 7490',
    address: 'Berlin - Germany'
  }
  constructor(){}
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.


  }


}
