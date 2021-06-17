import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AuthStateModel, Login, Logout } from "../actions/auth.action";
import { AuthService } from "../services/auth/auth.service";
import {tap} from 'rxjs/operators';


@State<AuthStateModel>({
    name: 'auth',
    defaults: {
      token: null,
      username: null
    }
  })
  @Injectable()
  export class AuthState {
    @Selector()
    static token(state: AuthStateModel): string | null {
      return state.token;
    }
  
    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
      return !!state.token;
    }

    @Selector()
  static userDetails(state: AuthStateModel) {
    return {
      name: state.token,
      email: state.username
    };
  }
  
    constructor(
        private authService: AuthService,
        private _router: Router) {}
  
    // @Action(Login)
    // login(ctx: StateContext<AuthStateModel>, action: Login) {
    //   return this.authService.UserLogin (action.payload).pipe(
    //     tap((result: { token: string }) => {
    //       ctx.patchState({
    //         token: result.token,
    //         username: action.payload.email
    //         // username: action.payload.email
    //       });
    //     })
    //   );
    // }
  
  //   @Action(Logout)
  //   logout({ setState, getState }: StateContext<AuthStateModel>) {
  //       this._router.navigate(['/transcript']);
  //   const { token } = getState();
  //   return this.authService.LogOut().pipe(
  //     tap(_ => {
  //       setState({
  //           token: null,
  //         username: null
  //       });
  //     })
  //   );
  // }
  }