import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptModule,
  NativeScriptFormsModule,
  NativeScriptHttpClientModule
} from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./login-page/login-page.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule
  ],
  declarations: [AppComponent, LoginPageComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
