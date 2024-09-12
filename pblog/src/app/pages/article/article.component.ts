import { Component } from '@angular/core';
import { Articles } from '../../models';
import ARTICLES from '../../articles.json'
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterLink,
    MarkdownModule
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  articleId: string | null = null
  articleContent: string | null = null
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');

    this.http.get('static/articles/' + this.articleId + '.md', { responseType: 'text' }).subscribe(data => {
      this.articleContent = data
    });
  }

}
