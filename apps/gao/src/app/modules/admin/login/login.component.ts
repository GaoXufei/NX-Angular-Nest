import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Login } from '@gao/src/app/types/login';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from '../../../request/request.service';

@Component({
  selector: 'nxgao-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signLoading = false;
  private login;
  // 创建一个formGroup -> formBuilder
  registerForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly requestService: RequestService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  public async handleLogin() {
    const isValidate = this.registerForm.status;

    timer(3000)
      .pipe((item: any) => {
        this.signLoading = true;
        return item;
      })
      .subscribe(() => (this.signLoading = false));

    if (isValidate === 'VALID') {
      const data: Login = this.registerForm.value;
      const login$ = this.requestService.login(data);
      login$.subscribe(response => {
        console.log(response);
      });
    }
  }
}
