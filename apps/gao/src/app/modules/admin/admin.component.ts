import { Component, OnInit } from '@angular/core';
import { TypeSideListNode } from '@gao/src/app/types/admin'

const TREE_DATA: TypeSideListNode[] = [
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'view_quilt',
  },
  {
    name: 'User',
    icon: 'assignment_ind',
    children: [
      {
        name: 'asd',
        children: [
          {
            name: 'dsa',
          }
        ]
      }
    ]
  },
  {
    name: 'Gavel',
    icon: 'gavel',
    children: [
      {
        name: 'asd',
        children: [
          {
            name: 'dsa'
          }
        ]
      }
    ]
  },
  {
    name: 'Fingerprint',
    icon: 'fingerprint',
    children: [
      {
        name: 'asd',
        children: [
          {
            name: 'dsa'
          }
        ]
      }
    ]
  },
  {
    name: 'CallToAction',
    icon: 'call_to_action',
    children: [
      {
        name: 'asd',
        children: [
          {
            name: 'dsa'
          }
        ]
      }
    ]
  },
];

@Component({
  selector: 'nxgao-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
