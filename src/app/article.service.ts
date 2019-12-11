import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  ARTICLE_ENDPOINT = 'https://5df0bfbb9df6fb00142bd1c0.mockapi.io/api/articles'

  constructor(private httpClient: HttpClient) { }

  public getArticleList(): Observable<any> {
    return this.httpClient.get<any>(this.ARTICLE_ENDPOINT)
  }


}
