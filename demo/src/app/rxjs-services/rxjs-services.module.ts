import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsServicesRoutingModule } from './rxjs-services-routing.module';
import { RxjsPageComponent } from './containers/rxjs-page/rxjs-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RxjsServicesRoutingModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [RxjsPageComponent],
  providers: []
})
export class RxjsServicesModule { }
