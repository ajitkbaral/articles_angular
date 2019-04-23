import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/Article';
import { Observable } from 'rxjs';


const url = 'http://192.168.88.105:3000/api/v1';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {

    const articlesUrl = `${url}/articles/`;
    return this.http.get<any>(articlesUrl);
  }

  addArticle(article: Article): Observable<any> {
    const addArticleUrl = `${url}/articles/`;
    return this.http.post<Article>(addArticleUrl, article, httpOptions);
  }

  updateArticle(article: Article): Observable<any> {
    const updateArticleUrl = `${url}/articles/${article.id}`;
    return this.http.put<Article>(updateArticleUrl, article, httpOptions);
  }

  deleteArticle(article: Article): Observable<any> {
    const deleteArticleUrl = `${url}/articles/${article.id}`;
    return this.http.delete<Article>(deleteArticleUrl, httpOptions);
  }

  getArticle(id: number): Observable<any> {
    const articleUrl = `${url}/articles/${id}`;
    return this.http.get(articleUrl);
  }

}
