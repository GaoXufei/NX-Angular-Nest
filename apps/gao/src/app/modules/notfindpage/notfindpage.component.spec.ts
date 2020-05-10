import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfindpageComponent } from './notfindpage.component';

describe('NotfindpageComponent', () => {
  let component: NotfindpageComponent;
  let fixture: ComponentFixture<NotfindpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfindpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfindpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
