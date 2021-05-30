import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "~/app/models/article-model";
import { ArticleService } from "~/app/services/article.service";

@Component({
  selector: "ns-article-list-item",
  templateUrl: "./article-list-item.component.html",
  styleUrls: ["./article-list-item.component.css"]
})
export class ArticleListItemComponent implements OnInit {
  public id;
  public article: Article;
  constructor(
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) {}
  ngOnInit() {
    const id = this._route.snapshot.params.id;
    this.getArticle(id);
  }

  private getArticle(id: string): void {
    this._articleService.getArticle(id).subscribe(resp => {
      this.article = resp;
    });
  }
}
