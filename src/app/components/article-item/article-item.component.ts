import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.sass']
})
export class ArticleItemComponent implements OnInit {

  @Input() article: Article;
  @Input() action = 'view';

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
  }

  viewArticle(article: Article) {
    this.router.navigate(['/article', article.id]);
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article).subscribe(d => {
      if (d.status === 'success') {
        this.router.navigate(['/articles']);
      }
    });
  }

  updateArticle(id: number) {
    this.router.navigate(['/article', id, 'edit']);
  }

}
