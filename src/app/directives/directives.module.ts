import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';

import { NgClassComponent } from './Attributal/ng-class/ng-class.component';
import { AttributalComponent } from './Attributal/attributal.component';
import { NgStyleComponent } from './Attributal/ng-style/ng-style.component';
import { NgModelComponent } from './Attributal/ng-model/ng-model.component';
import { DropdownComponent } from './componant/dropdown/dropdown.component';
import { ComponantComponent } from './componant/componant.component';
import { HighlightComponent } from './componant/highlight/highlight.component';
import { StructuralComponent } from './structural/structural.component';
import { SNgifComponent } from './structural/s-ngif/s-ngif.component';
import { SNgForComponent } from './structural/s-ng-for/s-ng-for.component';
import { SNgSwitchComponent } from './structural/s-ng-switch/s-ng-switch.component';


@NgModule({
  declarations: [
    
    NgClassComponent,
    AttributalComponent,
    NgStyleComponent,
    NgModelComponent,
    ComponantComponent,
    DropdownComponent,
    ComponantComponent,
    HighlightComponent,
    StructuralComponent,
    SNgifComponent,
    SNgForComponent,
    SNgSwitchComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
