import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
// this code of ngfor
h2tag=[
  {
    name:'sagar kasar',
    address:'at-kakadwadi',

  }
]


Student = [{
  Name: 'sagar',
  SirName: 'kasar',
  Address: 'kakadwadi',
  Age: 23
},
{
  Name: 'Youraj',
  SirName: 'Dighe',
  Address: 'Talegoan',
  Age: 18
},
{
  Name: 'Rushikesh',
  SirName: 'pawar',
  Address: 'Nilwande',
  Age: 22
},
{
  Name: 'Rahul',
  SirName: 'Dighe',
  Address: 'Talegoan',
  Age: 20
},
{
  Name: 'Sujit',
  SirName: 'Shirsath',
  Address: 'kakadwadi',
  Age: 19

}
];


title1 = 'blog1';
name = 'sagar';
arr = '[sagar, kasar,rahul,dighe]';
color = 'green';

UpdateColor() {
  this.color = 'red';

}
getName() {
  return this.name
}
obj = {
  Name: 'sagar',
  age: '20',
}
message: string = "Hello, World!";

getMessage(): string {
  return "Welcome to Angular!";
}

// types of property binding
Disabled = true;
appstatus: boolean = false;
channelName = false;

// <!-- Two way Binding -->
number = 345354;


// signup Reactive Form
Form: any = FormGroup;
signupForm: any = FormGroup;
   // Reactive Form
   loginForm: any = FormGroup;
constructor(private fb: FormBuilder,
  private toastr: ToastrService) { }  //this code of toastr

onSubmit() {
  console.log(this.loginForm.value);
  this.toastr.success("Form submited successfully");    //this code of toastr

} 
ngOnInit() {
  this.signupForm = this.fb.group({
    fname: [''],
    lname: [''],
    Emailid: [''],
    userPassword: [''], ///^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  });

  this.loginForm = this.fb.group({
    name: ['',[Validators.required,Validators.maxLength(20)]],
    email: [''],
    address: [''],
    password: ['', [Validators.required, Validators.pattern('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;'),]],
    message: [''],
  });
  
  this.Form = this.fb.group({
    fruitlist: [''],
    description: [''],
  });
}
Fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "apple" },
  { id: 3, name: "cherry" },
  { id: 4, name: "pinApple" },
];

// ng-Select
isSubmit = false;
onPost() {
  this.isSubmit = true;
}

reset(){
  this.signupForm.reset();
  }

PostData(signupForm:any) {
  console.log(this.signupForm.value);
  // console.log(this.signupForm.control);
}

// code of ngIf:
showName = true;


// ngIf:
isShow: boolean = false;
Show() {
  this.isShow = !this.isShow;
}


isChange: boolean = true;
Change() {
  this.isChange = !this.isChange;
}

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

//Advance Pipes 
Title1 = 'Angular Pipes :';
number1=2000.3000;
currency=20;
user=[{
data:'sagar kasar',
}]


//  <!-- Template Driven Form

data={
name:'',
userName:'',
Email:'',
}
Submit(data:NgForm){
console.log('data',data);
}

// item={
// name:''
// }
// submit(item:NgForm){
// console.log('item',item);

// }

// two way binding :

userName: string = '';


// @input
currentName = "John Root";

card = {
name:"Kane Williamson",
age:45,
country:"New Zealand"
}


users = ['Trent Boult','Devon Conway']
addUser(user:string){
this.users.push(user)
}
}
