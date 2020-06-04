import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';

interface SideListNode {
  name: string;
  icon?: string;
  url?: string;
  children?: SideListNode[];
}

const TREE_DATA: SideListNode[] = [
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'featured_play_list',
  },
  {
    name: 'User',
    icon: 'home',
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
  }
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'nxgao-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss']
})
export class MenuSideComponent {
  private _transformer = (node: SideListNode, level: number) => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    icon: node.icon,
    url: node.url,
    level
  });
  public treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable
  );
  public treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children
  );
  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  };

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
