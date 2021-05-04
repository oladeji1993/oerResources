// Auth State Model
export class AuthStateModel {
    // if you have an extra token like authorization, you can add it here plus any other user information you might want to store
    token?: string; // refreshToken?: string;
    email?: string;
    username?: string;
  }