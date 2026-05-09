import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Saved } from './saved/saved';
import { Details } from './details/details';
import { ResultsDB } from './results-db/results-db';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'saved', component: Saved},
    {path: 'details', component: Details},
    {path: 'results-db', component: ResultsDB}

];
