import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Card } from './models/interface';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DeckApiService {
  private _http = inject(HttpClient);
  public cards = signal<Card[]>([]);


  getCards() {
        this._http.get<Card[]>(environment.apiURL)
      .subscribe(data => {
          this.cards.set(data);
      });
  }

  addCard(card: Card) {
      const url = environment.apiURL;
      this._http.post<Card[]>(url, card)
      .subscribe(data => {  
          this.getCards();
      });
      alert('Card added to deck!');
  }

  deleteCard(myId:number) {
    const url = environment.apiURL + '/' + myId;
    this._http.delete(url)
    .subscribe(data => { 
      this.getCards();
    });
    alert('Card removed from deck!');
  }

  
}
