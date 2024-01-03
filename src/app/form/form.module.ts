import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { ReactifromComponent } from './reactifrom/reactifrom.component';
import { TemplefromComponent } from './templefrom/templefrom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactifromComponent,
    TemplefromComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class FormModule { }
