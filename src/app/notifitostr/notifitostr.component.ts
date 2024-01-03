import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifitostr',
  templateUrl: './notifitostr.component.html',
  template:'<h1>Hello, Angular!</h1>',

  styleUrls: ['./notifitostr.component.css']
})
export class NotifitostrComponent {
  constructor(private toastr: ToastrService) { }  
  
    successmsg(){  
      this.toastr.success("Toastr Success message",'Success')  
  }  
   errorsmsg(){  
      this.toastr.error("Toastr Error Notification",'Error')  
    
  }  
  infotoastr()  
  {  
  this.toastr.info("Important News", 'Information');  
  }  
  toastrwaring()  
  {  
    this.toastr.warning("Battery about to Die", 'Warning');  
  }



showSuccess() {
  this.toastr.success('Hello world!', 'Toastr fun!');
}

  }


