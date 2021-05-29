import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: "ns-articles",
  templateUrl: "./article-container.component.html",
  styleUrls: ["./article-container.component.css"]
})

export class ArticleContainerComponent implements OnInit{

    constructor(private _http: HttpClient) {
        this.getArticles();
    }

    ngOnInit(): void {
    }

    public getArticles(): void {
    console.log("here");
    this._http
      .get<any>(`http://10.0.2.2:5000/v1/articles`, {withCredentials: true}).subscribe((resp) => {
          console.log(resp);
      });
    }
}
