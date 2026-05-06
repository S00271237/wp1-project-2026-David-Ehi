import { Component } from '@angular/core';
import { Search } from '../search/search';
import { ResultsAPI } from '../results-api/results-api';
import { ResultsDB } from '../results-db/results-db';

@Component({
  selector: 'app-home',
  imports: [Search, ResultsAPI],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
