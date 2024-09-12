import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SoundsComponent } from './pages/sounds/sounds.component';
import { ArticleComponent } from './pages/article/article.component';

export const routes: Routes = [
    { path: "sounds", component: SoundsComponent },
    { path: "article/:id", component: ArticleComponent },
    { path: '**', component: IndexComponent }
];
