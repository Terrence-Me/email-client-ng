import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserNameAvailableResponse {
  available: true;
}

export interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UserNameAvailableResponse>(
      this.rootUrl + 'auth/username',
      {
        username: username,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(
      this.rootUrl + '/auth/signup',
      credentials
    );
  }
}
