import { Component } from '@angular/core';

@Component({
  selector: 'app-s-ng-for',
  templateUrl: './s-ng-for.component.html',
  styleUrls: ['./s-ng-for.component.css']
})
export class SNgForComponent {
// this code of ngfor
h2tag=[
  {
    name:'sagar kasar',
    address:'at-kakadwadi',

  }
];
userdata=[
{
  Name:'sagar kasar',
  Address:'kakadwadi',
  Age:'23',
  Education:'Bca'
},
{
  Name:'sagar kasar',
  Address:'kakadwadi',
  Age:'23',
  Education:'Bca'
},
{
  Name:'sagar kasar',
  Address:'kakadwadi',
  Age:'23',
  Education:'Bca'
},
{
  Name:'sagar kasar',
  Address:'kakadwadi',
  Age:'23',
  Education:'Bca'
}
]

}
