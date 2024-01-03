import { Component } from '@angular/core';

@Component({
  selector: 'app-s-ngif',
  templateUrl: './s-ngif.component.html',
  styleUrls: ['./s-ngif.component.css']
})
export class SNgifComponent {
// code of ngIf:
showName = true;


// ngIf:
isShow: boolean = false;
Show() {
  this.isShow = !this.isShow;
}
thisshow:boolean=false;
liShow(){
  this.thisshow=this.thisshow;

}


isChange: boolean = true;
Change() {
  this.isChange = !this.isChange;
}











// this code of ngIf
showData: boolean=false;
show(){
  this.showData=!this.showData;
}

showList: boolean=false;
showSeo(){
  this.showList=!this.showList;
}
// this code of ngfor
h2tag=[
  {
    name:'sagar kasar',
    address:'at-kakadwadi',

  }
]
}

