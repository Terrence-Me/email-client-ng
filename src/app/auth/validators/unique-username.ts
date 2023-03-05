import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';

// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate = (control: AbstractControl): any => {
    const { value } = control;

    return this.http.post<any>('https://api.angular-email.com/auth/username', {
      username: value,
    });
  };
}
