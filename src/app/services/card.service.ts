import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards!: Card[];

  constructor(
    @Inject('apiUrl') private apiURL: string,
    private http: HttpClient
  ) { }

  getCards(): void {
    this.http.get<Card[]>(this.apiURL + '/cards')
    .subscribe((res: Card[]) => {
      this.cards = res;
    })
  }
  addCard(card: Card) {
    return this.http.post(this.apiURL + '/cards', card);
  }

  updateCard(card: Card, cardId: number) {
    return this.http.put(this.apiURL + '/cards/' + cardId, card);
  }

  deleteCard(cardId: number) {
    return this.http.delete(this.apiURL + '/cards/' + cardId);

  }
}
