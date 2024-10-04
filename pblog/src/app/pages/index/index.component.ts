import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import ARTICLES from "../../articles.json";
import { Article } from '../../models';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    RouterLink,
    MarkdownModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  articles: Article[] = ARTICLES

  articleContent: string | null = null

  constructor(private router: Router) { }

  selectArticle(articleId: string) {
    this.router.navigate(['/article/', articleId]);
  }
}
