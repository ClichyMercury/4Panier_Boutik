import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-accessoires-list',
  templateUrl: './accessoires-list.component.html',
  styleUrls: ['./accessoires-list.component.scss']
})
export class AccessoiresListComponent implements OnInit {

  constructor(private articleList: ArticleService) { }

  public articles: Article[] = []

  public filterAccessoireList: Article[] = []
  ngOnInit(): void {
    this.articleList.getArticle().subscribe({
      next: article => {
        this.articles = article
        this.filterAccessoireList = this.articles
        this.filterAccessoireList = this.filterArticle(this.articles, "accessoires");
        console.log("chaussure",this.filterAccessoireList)
      }
    })
  }

  private filterArticle(array: Array<Article>, request: string) {
    return array.filter(function (el) {
      return el.articleCategorie.toLocaleLowerCase().indexOf(request) !== -1
    })
  }

}
