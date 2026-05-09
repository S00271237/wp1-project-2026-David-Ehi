import { Component } from '@angular/core';
import { CardAPiService } from '../card-api-service';
import { inject } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  cardapi = inject(CardAPiService);

  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    const cardId = urlParams.get('id');
    if (cardId) {
      this.cardapi.getCardById(Number(cardId)).subscribe((response) => {
        if (response.data && response.data.length > 0) {
          this.cardapi.cards.set(response.data);
        }
      });
    }
  }
}
