import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponseBase,
  HttpResponse
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { mergeMap, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(
    private readonly injector: Injector,
    private readonly snackBar: MatSnackBar
  ) {}

  private goTo(url: string) {
    this.injector.get(Router).navigateByUrl(url);
  }

  private clearToken() {
    window.localStorage.removeItem('token');
  }

  private addToken(token) {
    window.localStorage.setItem('token', token);
  }

  private getToken() {
    return window.localStorage.getItem('token');
  }

  private handleData(ev: HttpResponseBase): Observable<any> {
    switch (ev.status) {
      case 201:
        if (ev instanceof HttpResponse) {
          const body: any = ev.body;
          // 请求成功
          if (body && body.status === 'success') {
            // 注册
            if (body.type === 'sign') {
              // 获取token
              const { token } = body;
              // 保存token
              this.addToken(token);
              // 重定向到主页
              this.goTo('/');
            }
          }
          // 请求错误
          if (body && body.status === 'failed') {
            this.snackBar.open(body.msg, 'close', {
              duration: 5000,
              horizontalPosition: 'left',
              verticalPosition: 'top'
            });
          }
        }
        break;
      case 200:
        if (ev instanceof HttpResponse) {
          const body: any = ev.body;
        }
        break;
      case 401:
        // 清除token
        this.clearToken();
        // 重定向到登录
        this.goTo('/passport/login');
        break;
      default:
        if (ev instanceof HttpErrorResponse) {
          console.warn(
            `未可知错误，大部分是由于后端不支持CORS或无效配置引起`,
            ev
          );
        }
        break;
    }

    if (ev instanceof HttpErrorResponse) {
      return throwError(ev);
    } else {
      return of(ev);
    }
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // 获取token
    const token = this.getToken();
    // 如果有token,则添加
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req).pipe(
      mergeMap((event: any) => {
        // 允许统一处理请求错误处理
        if (event instanceof HttpResponseBase) {
          return this.handleData(event);
        }
        // 若一切正常，则继续操作
        return of(event);
      }),
      catchError((error: HttpErrorResponse) => this.handleData(error))
    );
  }
}
