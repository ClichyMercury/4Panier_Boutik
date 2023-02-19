import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Article } from '../shared/models/article';
import { ArticleService } from '../shared/services/articles.service';
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  constructor(private articlesList : ArticleService) { }
  public articles!: Article[]

  ngOnInit(): void {
    this.articlesList.getArticle().subscribe({
      next: articles =>{
        this.articles = articles;
      }
    })
  }

}
