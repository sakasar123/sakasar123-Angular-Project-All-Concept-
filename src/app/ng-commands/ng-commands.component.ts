import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-commands',
  templateUrl: './ng-commands.component.html',
  styleUrls: ['./ng-commands.component.css']
})
export class NgCommandsComponent {

  HowFor = [
    {
      Command: 'npm i -g @angular/cli@16 /or/  @angular/cli@17',
      howfor: 'project install :',
    },
    {
      Command: 'ng new project-name',
      howfor: 'Create For project:',
    },
    {
      Command: 'npm install/ npm install --force',
      howfor: 'install For node module',
    },
    {
      Command: 'ng g m module-name --routing',
      howfor: 'Creating For Module :',
    },
    {
      Command: 'ng g c component-name',
      howfor: 'For Create component :',
    },
    {
      Command: ' ng g c module-name/component-name',
      howfor: 'For Lazy Loading :',
    },
    {
      Command: ' npm i @ng-select/ng-select',
      howfor: 'install For ng-select :',
    },
    {
      Command: ' ng serve --open',
      howfor: 'install For projctRun :',
    },
    {
      Command: ' npm i ngx-toastr',
      howfor: 'install for toastr lib :',
    },
    {
      Command: 'ng  add @angular/material',
      howfor: 'install For ng-material :',
    },  
     {
      Command: 'ng g sevice service-name ',
      howfor: 'install For services :',
    },
    {
      Command: 'npm i json-server ',
      howfor: 'install For db.json file:',
    },
  ]
}