import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-article',
    imports: [
        MarkdownModule
    ],
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss'
})
export class ArticleComponent {

  articleContent: string | null = null
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      let articleId = paramMap.get("id")
      this.http.get('static/articles/' + articleId + '.md', { responseType: 'text' }).subscribe(data => {
        this.articleContent = data
      });
    })

  }
}
