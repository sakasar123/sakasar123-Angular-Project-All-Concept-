import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ng-select-drop',
  templateUrl: './ng-select-drop.component.html',
  styleUrls: ['./ng-select-drop.component.css']
})
export class NgSelectDropComponent {
  Form: any = FormGroup;
  constructor(private fb:FormBuilder){
    this.Form = this.fb.group({
      fruitlist: [''],
      description: [''],
      languages:['']
    });
  }
formGroup:any=FormGroup;
Fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "apple" },
  { id: 3, name: "cherry" },
  { id: 4, name: "pinApple" },
];
lang = [
  { id: 1, langname: "Angular" },
  { id: 2, langname: "React" },
  { id: 3, langname: "ionic" },
  { id: 4, langname: "pwa" },
];
// ng-Select
isSubmit = false;
onPost() {
  this.isSubmit = true;
  console.log(this.Form.value);
}
}
