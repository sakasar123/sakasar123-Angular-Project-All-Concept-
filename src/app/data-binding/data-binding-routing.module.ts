import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path:'event-binding',  component:EventBindingComponent},
  {path:'interpolation',   component:InterpolationComponent},
  {path:'property-binding', component:PropertyBindingComponent},
  {path:'two-way-binding',  component:TwoWayBindingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
