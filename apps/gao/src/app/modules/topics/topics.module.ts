import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics.component';
import { SharedModule } from '../../shared/shared.module';
import { WaterFallComponent } from '../../components/others/water-fall/water-fall.component';

@NgModule({
  declarations: [TopicsComponent, WaterFallComponent],
  imports: [CommonModule, SharedModule, TopicsRoutingModule]
})
export class TopicsModule {}
