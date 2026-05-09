import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Card } from './models/interface';

@Injectable({
  providedIn: 'root',
})
export class DeckApiService {
  private _apiUrl = 'http://localhost:5050/cards';
  private _http = inject(HttpClient);
  public cards = signal<Card[]>([]);


  getCards() {
        this._http.get<Card[]>(this._apiUrl)
      .subscribe(data => {
          this.cards.set(data);
      });
  }

  addCard(card: Card) {
      const url = this._apiUrl;
      this._http.post<Card[]>(url, card)
      .subscribe(data => {  
          this.getCards();
      });
      alert('Card added to deck!');
  }

  deleteCard(myId:number) {
    const url = this._apiUrl + '/' + myId;
    this._http.delete(url)
    .subscribe(data => { 
      this.getCards();
    });
    alert('Card removed from deck!');
  }

  
}
