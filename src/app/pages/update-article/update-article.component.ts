import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.sass']
})
export class UpdateArticleComponent implements OnInit {

  title: string;
  body: string;

  page = 'edit';

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.articleService.getArticle(id).subscribe(d => {
      this.title = d.data.title;
      this.body = d.data.body;
    });
  }

  updateArticle(article: Article) {
    this.articleService.updateArticle(article).subscribe(d => {
      if (d.status === 'success') {
        this.router.navigate(['article', d.data.id]);
      }
    });
  }

}
