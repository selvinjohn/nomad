import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }    from './dashboard.component';

const dashboardsRoutes: Routes = [
  { path: 'dashboard',  component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/