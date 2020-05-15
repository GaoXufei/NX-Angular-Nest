import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

interface InterfaceList {
  image: string;
  title: string;
}

@Component({
  selector: 'nxgao-water-fall',
  templateUrl: './water-fall.component.html',
  styleUrls: ['./water-fall.component.scss']
})
export class WaterFallComponent implements OnInit, AfterViewInit, OnDestroy {
  public eventEnd$: Subject<any> = new Subject();
  public gap = 0;
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
  @ViewChildren('item') viewItems: QueryList<ElementRef>;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.eventLayout();
  }

  ngOnDestroy() {
    // 组件销毁时取消event订阅
    this.eventEnd$.next();
    this.eventEnd$.complete();
  }

  eventLayout() {
    // 监听window对象的resize事件
    fromEvent(window, 'resize')
      .pipe(takeUntil(this.eventEnd$), debounceTime(500))
      .subscribe(() => {
        this.waterFallLayout();
      });
    this.imgsLoaded(this.waterFallLayout());
  }

  /**
   * 图片全部加载完毕
   * @param cb 回调函数，图片全部加载完毕执行
   */
  imgsLoaded(cb) {
    const imgsDOM = Array.from(
      this.view.nativeElement.getElementsByTagName('img')
    );
    const imagesPromise = imgsDOM.map((img: any, index) => {
      return new Promise((resolve, reject) => {
        img.onload = function(response) {
          resolve(response);
        };
      });
    });
    Promise.all(imagesPromise).then(cb);
  }

  /**
   * 瀑布流布局函数
   */
  waterFallLayout() {
    // 定义存放高度数组
    const arrayHeight = [];
    // 获取单个元素宽度
    const itemWidth = this.viewItem.nativeElement.offsetWidth;
    // 计算一行当中可以放几个元素
    const colunmCount = parseInt(
      `${this.view.nativeElement.offsetWidth / itemWidth}`,
      10
    );
    // 初始化高度数组
    for (let i = 0; i < colunmCount; i++) {
      arrayHeight[i] = 0;
    }

    // 循环子元素
    this.viewItems.forEach(
      (item: ElementRef, index: number, items: ElementRef[]) => {
        // 找到最小高度
        const minHeight = Math.min(...arrayHeight);
        // 找到最小高度的下标
        const minIndex = arrayHeight.indexOf(minHeight);
        // 当前left偏移量 = 最小高度的下标 x 单元素宽度
        item.nativeElement.style.left = `${minIndex * itemWidth}px`;
        // 当前top偏移量 = 最小高度
        item.nativeElement.style.top = `${minHeight}px`;
        // 更新当前最小高度 = 最小高度 + 当前高度
        arrayHeight[minIndex] += item.nativeElement.offsetHeight;
      }
    );
    // 获取最高高度
    const maxHeight = Math.max(...arrayHeight);
    // 将最高高度赋值给容器
    this.view.nativeElement.style.height = `${maxHeight}px`;
  }
}
