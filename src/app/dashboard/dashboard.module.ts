import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DashboardComponent }    from './dashboard.component';
import {DndModule} from 'ng2-dnd';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SimpleDndComponent } from './drag';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    Ng2Bs3ModalModule,
    DndModule
  ],
  declarations: [
    DashboardComponent,
    SimpleDndComponent
  ],
  providers: [ ]
})
export class DashboardsModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/