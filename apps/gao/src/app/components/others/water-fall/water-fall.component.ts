import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';

interface InterfaceList {
  image: string;
  title: string;
}

@Component({
  selector: 'nxgao-water-fall',
  templateUrl: './water-fall.component.html',
  styleUrls: ['./water-fall.component.scss']
})
export class WaterFallComponent implements OnInit, AfterViewInit {
  public gap = 20;
  public list: InterfaceList[] = [
    {
      image: 'https://img.xjh.me/desktop/img/49969316_p0.jpg',
      title: 'title 1'
    },
    {
      image: 'https://img.xjh.me/desktop/img/48856765_p0.jpg',
      title: 'title 2'
    },
    {
      image: 'https://img.xjh.me/desktop/img/52594107_p0.jpg',
      title: 'title 3'
    },
    {
      image: 'https://img.xjh.me/desktop/img/63868383_p0_master1200.jpg',
      title: 'title 4'
    },
    {
      image: 'https://img.xjh.me/desktop/img/53860407_p0.jpg',
      title: 'title 5'
    },
    {
      image: 'https://img.xjh.me/desktop/img/ren-4.jpg',
      title: 'title 6'
    }
  ];

  // 容器
  @ViewChild('wrap') view: ElementRef;
  // 获取单个item节点
  @ViewChild('item') viewItem: ElementRef;
  // 获取列表dom节点
  @ViewChildren('item') viewItems: QueryList<any>;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.waterFall();
    fromEvent(document, 'resize').subscribe(alert);
  }

  waterFall() {
    // 获取容器宽度
    const wrapWidth: number = this.view.nativeElement.offsetWidth;
    // 单个子节点宽度
    const itemWidth: number = this.viewItem.nativeElement.offsetWidth;
    // 计算一行能放几列
    const colunmCount: number = parseInt(
      `${wrapWidth / (itemWidth + this.gap)}`,
      10
    );

    // 定义盛放高度的数组
    const heightInArray = [];
    // 遍历子节点
    this.viewItems.forEach(
      (item: ElementRef, index: number, items: ElementRef[]) => {
        // 下标小于一行能摆放的数量，说明是在第一行
        if (index < colunmCount) {
          // 第一行top偏移量为0
          item.nativeElement.style.top = 0;
          // 左偏移量 = 下标 * (单子节点 + 间距量)
          item.nativeElement.style.left = `${index * (itemWidth + this.gap)}px`;
          // 将第一行的高度保存到数组中
          heightInArray.push(item.nativeElement.offsetHeight);
        } else {
          // 找到最低高度
          const minHeight = Math.min(...heightInArray);
          // 找到最低高度的下标
          const minIndex = heightInArray.indexOf(minHeight);

          // 设置下一行盒子的位置 top值为最小列的高度 + 间距值
          item.nativeElement.style.top = `${minHeight + this.gap}px`;
          item.nativeElement.style.left = `${items[minIndex].nativeElement.offsetLeft}px`;

          // 修改最小高度
          heightInArray[minIndex] =
            heightInArray[minIndex] +
            item.nativeElement.offsetHeight +
            this.gap;
        }
      }
    );
  }
}
