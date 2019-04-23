import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from '../app/components/articles/articles.component';
import { LoginComponent } from './pages/login/login.component';
import { ArticleComponent } from './pages/article/article.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { UpdateArticleComponent } from './pages/update-article/update-article.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/add', component: AddArticleComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'article/:id/edit', component: UpdateArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
