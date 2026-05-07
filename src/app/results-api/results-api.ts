import { Component, inject } from '@angular/core';
import { CardAPiService } from '../card-api-service';

@Component({
  selector: 'app-results-api',
  imports: [],
  templateUrl: './results-api.html',
  styleUrl: './results-api.css',
})
export class ResultsAPI {
  public _ResultsAPI = inject(CardAPiService);

  constructor() {
    this._ResultsAPI.getCards();
  }
}
