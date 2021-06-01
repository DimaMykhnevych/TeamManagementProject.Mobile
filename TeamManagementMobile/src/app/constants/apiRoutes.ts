export class Routes {
  // private static API_BASE_URL: string = "http://10.0.2.2:5000/v1";
  private static API_BASE_URL: string =
    "https://teammanagement.azurewebsites.net/v1";
  public static Login: string = `${Routes.API_BASE_URL}/auth/login`;
  public static UserInfo: string = `${Routes.API_BASE_URL}/auth/user-info`;
  public static RawArticles: string = `${Routes.API_BASE_URL}/articles`;
}
