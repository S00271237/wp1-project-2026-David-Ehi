import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Saved } from './saved/saved';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'saved', component: Saved}
];
