import { Component, OnInit } from "@angular/core";
import { AuthSignInModel } from "../models/auth-signin-model";
import { RouterExtensions } from "@nativescript/angular";
import { LoginService } from "../services/login.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserModel } from "../models/user-model";

@Component({
  selector: "ns-login",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent {
  public email = "";
  public password = "";
  public isLoginFailed: boolean = false;
  public isEmailTouched: boolean = false;
  public isPasswordTouched: boolean = false;
  public userInfo: UserModel;
  public isLoginProceeding: boolean = false;

  constructor(
    private routerExtensions: RouterExtensions,
    private loginService: LoginService
  ) {
    this.getUserInfo();
  }

  public submit() {
    this.login();
  }

  public login(): void {
    this.isLoginProceeding = true;
    const signInModel: AuthSignInModel = {
      userName: this.email,
      password: this.password
    };
    this.loginService.login(signInModel).subscribe(resp => {
      if (resp.succeeded) {
        this.routerExtensions.navigate(["/articles"]);
        this.isLoginFailed = false;
      } else {
        this.isLoginFailed = true;
      }
      this.isLoginProceeding = false;
    });
  }

  public getUserInfo(): void {
    this.loginService.getUserInfo().subscribe(resp => {
      if (resp?.id) {
        this.userInfo = resp;
        this.routerExtensions.navigate(["/articles"]);
      }
    });
  }

  public onEmailFocus(event): void {
    this.isEmailTouched = true;
    this.isLoginFailed = false;
  }
  public onPasswordFocus(event): void {
    this.isPasswordTouched = true;
    this.isLoginFailed = false;
  }
}
