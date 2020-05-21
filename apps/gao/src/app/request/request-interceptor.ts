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

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  goTo(url: string) {
    this.injector.get(Router).navigateByUrl(url);
  }

  private handleData(ev: HttpResponseBase): Observable<any> {
    switch (ev.status) {
      case 201:
        if (ev instanceof HttpResponse) {
          const body: any = ev.body;
          // 登录200请求成功
          if (body && body.type === 'sign' && body === 200) this.goTo('/');
          // 登录400请求
          if (body && body.type === 'sign' && body === 400) {
          }
        }
        break;
      case 200:
        if (ev instanceof HttpResponse) {
          const body: any = ev.body;
        }
        break;
      case 401:
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
    const url = req.url;
    const newReq = req.clone({ url });

    return next.handle(newReq).pipe(
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
