import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, LoginResponse } from '../../types/login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private readonly http: HttpClient) {}

  login = (data: Login) => {
    return this.http.post('/api/auth/login', data).pipe(
      map((response: LoginResponse) => {
        const { token, ...result } = response;
        if (status === 'success') {
          console.log(token);
        }
        return result;
      })
    );
  };
}
