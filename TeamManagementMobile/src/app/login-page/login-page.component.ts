import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "ns-login",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent {
  public email = "";
  public password = "";

  constructor(private _http: HttpClient) {}
  public submit() {
    this.getInfo();
  }

  public getInfo(): void {
    console.log("HERE");
    this._http
      .get<any>(`http://10.0.2.2:44372/v1/employee`, {})
      .subscribe(resp => {
        console.log("done");
        console.log(resp);
      });
  }
}
