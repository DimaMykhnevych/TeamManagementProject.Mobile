import { Component, OnInit } from "@angular/core";
import { RawArticleModel } from "~/app/models/raw-article-model";
import { UserModel } from "~/app/models/user-model";
import { ArticleService } from "~/app/services/article.service";
import { LoginService } from "~/app/services/login.service";

@Component({
  selector: "ns-articles",
  templateUrl: "./article-container.component.html",
  styleUrls: ["./article-container.component.css"]
})
export class ArticleContainerComponent implements OnInit {
  public userInfo: UserModel;
  public htmlString = "";
  public items: Array<RawArticleModel>;
  public isArtilesLoaded: boolean = false;
  constructor(
    private loginService: LoginService,
    private _articleService: ArticleService
  ) {}

  ngOnInit(): void {
    // this.items = this.testGetArt();
    this.getArticles();
    this.getUserInfo();
    // this.getArticles();
  }

  public testGetArt(): RawArticleModel[] {
    return [
      { id: "1", name: "test1" },
      { id: "2", name: "test2" },
      { id: "3", name: "test3" }
    ];
  }

  public getUserInfo(): void {
    this.loginService.getUserInfo().subscribe(resp => {
      if (resp?.id) {
        this.userInfo = resp;
      }
    });
  }

  public getArticles(): void {
    this._articleService.getRawArticles().subscribe(resp => {
      this.items = resp;
      this.isArtilesLoaded = true;
    });
  }
}
