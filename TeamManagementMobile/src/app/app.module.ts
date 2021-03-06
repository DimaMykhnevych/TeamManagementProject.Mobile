import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptModule,
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptRouterModule
} from "@nativescript/angular";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { ArticleContainerComponent } from "./articles/components/article-container/article-container.component";
import { LoginService } from "./services/login.service";
import { PageDirective } from "./directives/page.directive";
import { ArticleService } from "./services/article.service";
import { ArticleListItemComponent } from "./articles/components/article-list-item/article-list-item.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    ArticleContainerComponent,
    PageDirective,
    ArticleListItemComponent
  ],
  providers: [LoginService, ArticleService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
