import { Component } from '@angular/core';
import { CardAPiService } from '../card-api-service';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  cards = inject(CardAPiService);
  searchInput = '';
  cardType = '';
  atkValue: number | null = null;
  defValue: number | null = null;

  onSearch() {
    let params = this.searchInput ? `fname=${encodeURIComponent(this.searchInput)}` : '';
    if (this.cardType) {
      if (params) {
        params += '&type=' + this.cardType;
      } else {
        params = 'type=' + this.cardType;
      }
    }
    if (this.atkValue !== null) {
      params += params ? `&atk=${this.atkValue}` : `atk=${this.atkValue}`;
    }
    if (this.defValue !== null) {
      params += params ? `&def=${this.defValue}` : `def=${this.defValue}`;
    }
    this.cards.currentPage.set(0);
    this.cards.getCards(params);
}
}
