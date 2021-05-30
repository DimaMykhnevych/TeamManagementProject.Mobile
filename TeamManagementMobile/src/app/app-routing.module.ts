import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { LoginPageComponent } from "./login-page/login-page.component";
import { ArticleContainerComponent } from "./articles/components/article-container/article-container.component";
import { ArticleListItemComponent } from "./articles/components/article-list-item/article-list-item.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "articles", component: ArticleContainerComponent },
  { path: "article/:id", component: ArticleListItemComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
