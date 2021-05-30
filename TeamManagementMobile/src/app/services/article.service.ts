import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Routes } from "../constants/apiRoutes";
import { RawArticleModel } from "../models/raw-article-model";
import { Article } from "../models/article-model";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private _http: HttpClient) {}

  public getRawArticles(): Observable<RawArticleModel[]> {
    return this._http.get<RawArticleModel[]>(Routes.RawArticles, {
      withCredentials: true
    });
  }

  public getArticle(id: string): Observable<Article> {
    return this._http.get<Article>(`${Routes.RawArticles}/${id}`, {
      withCredentials: true
    });
  }
}
