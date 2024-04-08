import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule, NgbDropdownModule, NgbAccordionModule, NgbModalModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { LightboxModule } from 'ngx-lightbox';

import { TabsModule } from './tabs/tabs.module';

import { ChatRoutingModule } from './chat-routing.module';

import {DatePipe} from '@angular/common';

// Emoji Picker
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { CarouselModule } from 'ngx-owl-carousel-o';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

import { IndexComponent } from './index/index.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    LightboxModule,
    NgbAccordionModule,
    NgbModalModule,
    NgbCollapseModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChatRoutingModule,
    TabsModule,
    NgbTooltipModule,
    NgbDropdownModule,
    TranslateModule,
    SimplebarAngularModule,
    PickerModule,
    CarouselModule
  ],
  providers: [
    DatePipe
  ],
  exports: []
})
export class ChatModule { }
