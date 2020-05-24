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
import { HintService } from '../publicTools/hint.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(
    private readonly injector: Injector,
    private readonly hintService: HintService,
    private readonly authSerivce: AuthService
  ) {}
  /**
   * 跳转对应页面
   * @param url 页面地址
   */
  private goTo(url: string) {
    this.injector.get(Router).navigateByUrl(url);
  }
  // 处理请求
  private handleData(ev: HttpResponseBase): Observable<any> {
    switch (ev.status) {
      case 201:
        if (ev instanceof HttpResponse) {
          const { data } = ev.body;
          const { token } = data;
          // 如果返回的数据中有token，证明此次为登录请求
          if (token) {
            // 将token保存
            this.authSerivce.addToken(token);
            // 提示用户登录成功
            this.hintService.snackOpen('登录成功');
            // 重定向到页面
            this.goTo('/admin');
          }
        }
        break;
      case 200:
        break;
      case 401:
        // 清除token
        this.authSerivce.clearToken();
        // 重定向到登录
        this.goTo('/admin/sign');
        break;
      case 403:
      case 404:
      case 500:
        if (ev instanceof HttpErrorResponse) {
          const { error } = ev;
          this.hintService.snackOpen(error.message);
        }
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
    const token = this.authSerivce.getToken();
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
