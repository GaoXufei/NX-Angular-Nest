import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login, LoginResponse } from '../types/login';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(
    private readonly http: HttpClient,
    private readonly snackBar: MatSnackBar
  ) {}

  login = (data: Login) => {
    return this.http.post('/api/auth/login', data).pipe(
      filter((response: LoginResponse) => {
        return response.status === 'success';
      }),
      map((response: LoginResponse) => {
        const { token, ...result } = response;
        this.snackBar.open(result.msg, 'close', {
          duration: 5000,
          horizontalPosition: 'left',
          verticalPosition: 'top'
        });
        return result;
      })
    );
  };
}
