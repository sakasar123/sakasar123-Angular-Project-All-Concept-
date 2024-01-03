import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { AllComponent } from './all/all.component';
import { NotifitostrComponent } from './notifitostr/notifitostr.component';
import { PipesComponent } from './pipes/pipes.component';
import { NgSelectDropComponent } from './ng-select-drop/ng-select-drop.component';
import { NgCommandsComponent } from './ng-commands/ng-commands.component';
import { InputtComponent } from './inputt/inputt.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    NotifitostrComponent,
    PipesComponent,
    NgSelectDropComponent,
    NgCommandsComponent,
    InputtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
FormsModule,    
      ToastrModule.forRoot({
        // timeOut: 1000,
        // positionClass: 'bottom-top',
        // preventDuplicates: true,
      }),
    ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
