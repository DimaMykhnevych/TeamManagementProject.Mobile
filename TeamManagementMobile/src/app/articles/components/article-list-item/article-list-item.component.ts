import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "ns-article-list-item",
  templateUrl: "./article-list-item.component.html",
  styleUrls: ["./article-list-item.component.css"]
})
export class ArticleListItemComponent implements OnInit {
  public id;
  constructor(private _route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this._route.snapshot.params.id;
  }
}
