import { Component } from '@angular/core';
import { CardAPiService } from '../card-api-service';
import { inject } from '@angular/core';
import { DeckApiService } from '../deck-api-service';

@Component({
  selector: 'app-results-db',
  imports: [],
  templateUrl: './results-db.html',
  styleUrl: './results-db.css',
})
export class ResultsDB {
    public _ResultsAPI = inject(DeckApiService);

  constructor() {
    this._ResultsAPI.getCards();
  }

    viewCard(card: any) {
    window.location.href = `/details?id=${card.id}`;
  }

  removeCard(card: any) {
    this._ResultsAPI.deleteCard(card._id);
  }
}
  