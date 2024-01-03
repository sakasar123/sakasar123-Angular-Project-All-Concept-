import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'My-all-Project';
  
// this code of ngIf
showData: boolean=false;

show(){
  this.showData=!this.showData;
}

showList: boolean=false;
showSeo(){
  this.showList=!this.showList;
}

isShow: boolean = false;
Show() {
  this.isShow = !this.isShow;
}

showbg: boolean = false;
Showbg() {
  this.showbg = !this.showbg;
}


//code of @inputt
obj = {
  Name: 'sagar',
  age: '20',
}

message: string = "Hello, World!";

getMessage(): string {
  return "Welcome to Angular!";
}
currentName = "John Root";

user = {
  name:"Kane Williamson",
  age:45,
  country:"New Zealand"
}
users = ['Trent Boult','Devon Conway']
addUser(user:string){
  this.users.push(user,'')
}



}
