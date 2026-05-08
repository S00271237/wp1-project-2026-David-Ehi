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

  onSearch() {
    let params = this.searchInput ? `fname=${encodeURIComponent(this.searchInput)}` : '';
    if (this.cardType) {
      if (params) {
        params += '&type=' + this.cardType;
      } else {
        params = 'type=' + this.cardType;
      }
    }
    this.cards.currentPage.set(0);
    this.cards.getCards(params);
}
}
