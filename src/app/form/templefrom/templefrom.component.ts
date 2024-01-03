import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-templefrom',
  templateUrl: './templefrom.component.html',
  styleUrls: ['./templefrom.component.css']
})
export class TemplefromComponent {
constructor(private toastr:ToastrService){}


    data={
      name:'',
      userName:'',
Email:'',
      }
      Submit(data:NgForm){
      console.log('data',data);
      alert('SAVE DATA SUCCESSFULLY !')

      }
      successmsg(){  
        this.toastr.success("Toastr Success message",'Success')  
    }  
 
}
