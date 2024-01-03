import { Component } from '@angular/core';

@Component({
  selector: 'app-s-ng-switch',
  templateUrl: './s-ng-switch.component.html',
  styleUrls: ['./s-ng-switch.component.css']
})
export class SNgSwitchComponent {
//Structural Directive ngSwitch:
greeting: String = " ";

SelectedProgramminglanguage = ' ';
setGreeting(event: any) {
  console.log(event);
  this.greeting = event.type;
}
getMyInput(myInput: any) {
  console.log(myInput.value);
}
SetProgramminglanguage(event: any) {
  this.SetProgramminglanguage = event.target.value;
}
}
