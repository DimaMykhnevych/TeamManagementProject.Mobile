import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthSignInModel } from '../models/auth-signin-model';
import { Observable } from 'rxjs';
import { Routes } from '../constants/apiRoutes';
import { LoginResponse } from '../models/login-response'
import { UserModel } from '../models/user-model'

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private _http: HttpClient) {}

  public login(loginModel: AuthSignInModel): Observable<LoginResponse>{
      return this._http.post<LoginResponse>(Routes.Login, loginModel, {withCredentials: true});
  }

  public getUserInfo(): Observable<UserModel>{
    return this._http.get<UserModel>(Routes.UserInfo, {withCredentials: true});
  }
}