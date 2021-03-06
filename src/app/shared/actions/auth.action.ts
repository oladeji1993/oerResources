export interface AuthStateModel {
    token: string | null;
    username: string | null;
  }
  
  export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: { email: string; password: string }) {}
  }
  
  export class Logout {
    static readonly type = '[Auth] Logout';
  }