import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SNgifComponent } from './structural/s-ngif/s-ngif.component';
import { SNgForComponent } from './structural/s-ng-for/s-ng-for.component';
import { SNgSwitchComponent } from './structural/s-ng-switch/s-ng-switch.component';
import { DropdownComponent } from './componant/dropdown/dropdown.component';
import { HighlightComponent } from './componant/highlight/highlight.component';
import { NgClassComponent } from './Attributal/ng-class/ng-class.component';
import { NgModelComponent } from './Attributal/ng-model/ng-model.component';
import { NgStyleComponent } from './Attributal/ng-style/ng-style.component';

const routes: Routes = [
{path:'structural/s-ngif',component:SNgifComponent},
{path:'structural/s-ng-for',component:SNgForComponent},
{ path:'structural/s-ng-switch', component:SNgSwitchComponent},

{path:'attributal/ng-class',component:NgClassComponent},
{path:'attributal/ng-model',component:NgModelComponent},
{ path:'attributal/ng-style', component:NgStyleComponent},

{path:'componant/dropdown',component:DropdownComponent},
{path:'componant/highlight',component:HighlightComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
