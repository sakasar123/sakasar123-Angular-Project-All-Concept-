import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  title = 'project';
  title1 = 'blog1';
  name = 'sagar';
  arr = '[sagar, kasar,rahul,dighe]';
  color = 'green';

  getName() {
    return this.name
  }
  obj = {
    Name: 'sagar',
    age: '20',
  }
 
}
