import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './com/home/home.component';
import {PredictIssueComponent} from "./com/predict-issue/predict-issue.component";
import {CustomerEffortComponent} from "./com/customer-effort/customer-effort.component";
import {ErrorComponent} from "./com/error/error.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'predict-issue',
    component: PredictIssueComponent
  },
  {
    path: 'customer-effort',
    component: CustomerEffortComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
