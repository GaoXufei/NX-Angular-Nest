import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nxgao-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // 创建一个formGroup
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor() {}

  ngOnInit(): void {
    const statusChanges$ = this.registerForm.statusChanges;
    statusChanges$.subscribe(console.log);
  }

  public async handleLogin() {
    console.log(this.registerForm.value);
  }
}
