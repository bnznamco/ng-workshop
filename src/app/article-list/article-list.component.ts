import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  displayedColumns = ['name', 'color', 'price']
  articles: any[]
  constructor(
    public articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.getArticleList().subscribe(
      result => this.articles = result
    )
  }

}
