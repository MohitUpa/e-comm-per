export class LoggedUser {
  constructor(
    public email: string,
    public userId: string,
    private _token: string
  ) {}

  get token () {
    return this._token;
  }
}
