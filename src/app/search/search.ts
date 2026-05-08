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

  onSearch() {
    const searchInput = (document.getElementById('searchInput') as HTMLInputElement).value.trim();
    this.cards.cardname.set(searchInput);
    this.cards.currentPage.set(0);
    this.cards.getCards(searchInput ? `fname=${encodeURIComponent(searchInput)}` : '');
}
}
