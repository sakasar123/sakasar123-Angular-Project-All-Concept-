import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactifrom',
  templateUrl: './reactifrom.component.html',
  styleUrls: ['./reactifrom.component.css']
})
export class ReactifromComponent {
  loginForm:any=FormGroup;

  constructor(private fb:FormBuilder){
  
  }
  ngOnInit(){
    this.loginForm=this.fb.group({
      name:['',Validators.required,Validators.pattern('')],
      password:['',Validators.required,Validators.pattern],
      number:['',Validators.required,Validators.required],
      email:['',Validators.required,Validators.email]
    })
  }
  OnSubmit(){
    console.log(this.loginForm.value );
    
  }
}
