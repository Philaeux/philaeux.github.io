import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SoundsComponent } from './pages/sounds/sounds.component';

export const routes: Routes = [
    { path: "sounds", component: SoundsComponent },
    { path: '**', component: IndexComponent }
];
