import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login, LoginResponse } from '../types/login';
import { API_LOGIN, API_TOPIC } from './api-list';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(
    private readonly http: HttpClient,
    private readonly snackBar: MatSnackBar
  ) {}
  // 登录
  login = (data: Login) => this.http.post(API_LOGIN, data);
  // 获取列表
  topic = () => this.http.get(API_TOPIC);
}
