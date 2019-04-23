import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.sass']
})
export class AddArticleComponent implements OnInit {

  @Input() title;
  @Input() body;

  @Input() page = 'add';

  @Output() updateArticle: EventEmitter<any> = new EventEmitter();

  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addArticle() {
    this.articleService.addArticle({
      id: 0,
      title: this.title,
      body: this.body
    }).subscribe(d => {
      if (d.status === 'success') {
        this.router.navigate(['article', d.data.id]);
      }
    });
  }

  editArticle() {
    const article = {
      id: this.route.snapshot.params.id,
      title: this.title,
      body: this.body
    };
    this.updateArticle.emit(article);
  }

}
