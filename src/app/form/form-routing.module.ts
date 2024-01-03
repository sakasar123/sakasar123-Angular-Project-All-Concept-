import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactifromComponent } from './reactifrom/reactifrom.component';
import { TemplefromComponent } from './templefrom/templefrom.component';

const routes: Routes = [
  {path:'reactifrom',component:ReactifromComponent},
  {path:'templefrom',component:TemplefromComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
