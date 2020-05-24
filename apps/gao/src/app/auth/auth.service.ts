import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { Observable } from 'rxjs';
import { every } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly requestService: RequestService) {}

  // 清除token
  clearToken() {
    window.localStorage.removeItem('token');
  }

  // 添加token
  addToken(token: string) {
    window.localStorage.setItem('token', token);
  }

  // 获取token
  getToken() {
    return window.localStorage.getItem('token');
  }

  // 是否登录 / token是否失效
  getIsSignStatus(): Observable<boolean> {
    const isSign$ = this.requestService.isSign().pipe(
      every((response: any) => {
        return response.code === 0;
      })
    );
    return isSign$;
  }
}
