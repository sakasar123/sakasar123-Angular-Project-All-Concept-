import { Component,OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputt',
  templateUrl: './inputt.component.html',
  styleUrls: ['./inputt.component.css']
})
export class InputtComponent implements OnInit {
currentName: any;
  ngOnInit(): void {

  }
  @Input() name : any;
  @Input() obj: any;

  // @Input() name1 : any;
  @Output() dataEvent = new EventEmitter<string>()

  addUser(value:any){
    this.dataEvent.emit(value)
  }
  
}
