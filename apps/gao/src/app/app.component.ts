import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nxgao/api-interfaces';

@Component({
  selector: 'nxgao-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
  ngOnInit() {
    // this.hello$.subscribe(console.log);
  }
}
