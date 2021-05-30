import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthSignInModel } from "../models/auth-signin-model";
import { Observable } from "rxjs";
import { Routes } from "../constants/apiRoutes";
import { LoginResponse } from "../models/login-response";
import { RawArticleModel } from "../models/raw-article-model";

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
}
