import { inject, Injectable, signal } from '@angular/core';
import { Card } from './models/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CardAPiService {
  public cards = signal<Card[]>([]);
  private _http = inject(HttpClient);
  public currentPage = signal<number>(0);
  public cardname = signal<string>('');
  public totalPages = signal<number>(0);
  public pageSize = 14;
  public totalCards = signal<number>(0);
  private _apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';


public currentParams = signal<string>('');

getCards(params: string = '') {
  this.currentParams.set(params);
  const offset = this.currentPage() * this.pageSize;
  const paramString = params ? `&${params}` : '';

  this._http
    .get<{ data: any[] }>(`${this._apiUrl}?${params}`)
    .subscribe((response) => {
      this.totalCards.set(response.data.length);
      this.totalPages.set(Math.ceil(response.data.length / this.pageSize));
    });

  this._http
    .get<{ data: any[] }>(`${this._apiUrl}?num=${this.pageSize}&offset=${offset}${paramString}`)
    .subscribe((response) => {
      this.cards.set(response.data);
    });
}

getCardById(id: number) {
  return this._http.get<{ data: any[] }>(`${this._apiUrl}?id=${id}`);
}

nextPage() {
  this.currentPage.update((p) => p + 1);
  this.getCards(this.currentParams());
}

prevPage() {
  if (this.currentPage() > 0) {
    this.currentPage.update((p) => p - 1);
    this.getCards(this.currentParams());
  }
}


}
