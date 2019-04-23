import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
  filteredArticles: Article[];


  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(a => {
      this.articles = a.data;
      this.filteredArticles = this.articles;
    });
  }

  searchArticle(searchedText: string) {
    const regex = new RegExp(searchedText, 'i');
    this.filteredArticles = this.articles.filter(article => article.title.search(regex) !== -1);
  }

}
