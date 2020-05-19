import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

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

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public async handleLogin() {
    const isValidate = this.registerForm.status;
    if (isValidate === 'VALID') alert(`提交！`);
  }
}
