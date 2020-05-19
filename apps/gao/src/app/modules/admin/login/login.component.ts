import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RequestService } from '../../request/request.service';
import { Login } from '@gao/src/app/types/login';

@Component({
  selector: 'nxgao-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // 创建一个formGroup -> formBuilder
  registerForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly requestService: RequestService
  ) {}

  ngOnInit(): void {}

  public async handleLogin() {
    const isValidate = this.registerForm.status;

    if (isValidate === 'VALID') {
      const data: Login = this.registerForm.value;
      const login$ = this.requestService.login(data);
      login$.subscribe(console.log);
    }
  }
}
