import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics.component';
import { SharedModule } from '../../shared/shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TopicsComponent],
  imports: [CommonModule, SharedModule, TopicsRoutingModule, FlexLayoutModule]
})
export class TopicsModule {}
