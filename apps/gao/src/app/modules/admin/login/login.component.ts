import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Login } from '@gao/src/app/types/login';
import { Subject } from 'rxjs';
import { RequestService } from '@gao/src/app/request/request.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'nxgao-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private submitSubject$ = new Subject<any>();
  // 创建一个formGroup -> formBuilder
  registerForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly requestService: RequestService
  ) {}

  ngOnInit(): void {
    // 订阅subject并且进行防抖操作
    this.submitSubject$
      .pipe(debounceTime(500))
      .subscribe(() => this.sendSign());
  }

  private sendSign() {
    // 获取用户输入项
    const data: Login = this.registerForm.value;
    // 提交到服务器
    this.requestService.login(data).subscribe();
  }

  public handleLogin() {
    // 获取当前表单输入是否完成的状态
    const isValidate = this.registerForm.status;
    // 如果完成
    if (isValidate === 'VALID') {
      // 发送通知
      this.submitSubject$.next();
    }
  }
}
