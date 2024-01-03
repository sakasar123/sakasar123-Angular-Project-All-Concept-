import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { PipesComponent } from './pipes/pipes.component';
import { NgSelectDropComponent } from './ng-select-drop/ng-select-drop.component';
import { NgCommandsComponent } from './ng-commands/ng-commands.component';
import { NotifitostrComponent } from './notifitostr/notifitostr.component';
import { InputtComponent } from './inputt/inputt.component';

const routes: Routes = [
  {path:'directives', loadChildren:()=>import('./directives/directives.module').then(mod=>mod.DirectivesModule)},
  {path:'form', loadChildren:()=>import('./form/form.module').then(mod=>mod.FormModule)},
  {path:'data-binding', loadChildren:()=>import('./data-binding/data-binding.module').then(mod=>mod.DataBindingModule)},

{path:'all',component:AllComponent},
{path:'pipes',component:PipesComponent},
{path:'ngselectdrop',component:NgSelectDropComponent},
{path:'ngcommands',component:NgCommandsComponent},
{path:'notifitostr', component:NotifitostrComponent},
{path:'inputt', component:InputtComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
