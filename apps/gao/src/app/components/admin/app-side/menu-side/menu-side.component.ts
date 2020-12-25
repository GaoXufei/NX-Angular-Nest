import { Component, Input } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';

interface SideListNode {
  name: string;
  icon?: string;
  url?: string;
  children?: SideListNode[] | [];
}

const TREE_DATA: SideListNode[] = [
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
interface ExampleFlatNode {
  name: string,
  level: number,
  expandable: boolean,
}
@Component({
  selector: 'nxgao-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss']
})
export class MenuSideComponent {
  @Input() _treeData: SideListNode[] = [];

  // 树型菜单 start
  private _transformer = (node: SideListNode, level: number) => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    icon: node.icon,
    url: node.url,
    level
  });
  // tslint:disable-next-line: member-ordering
  public treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable
  );
  // tslint:disable-next-line: member-ordering
  public treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children
  );
  // tslint:disable-next-line: member-ordering
  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  // 树型菜单 end
  constructor() {
    this.dataSource.data = TREE_DATA;
    console.log( this._treeData );
  };

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
