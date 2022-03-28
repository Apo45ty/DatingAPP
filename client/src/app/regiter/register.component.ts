import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegiterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {

  }
  register (){
    console.log(this.model)
    this.accountService.register(this.model).subscribe({
      next:(response)=>{
        this.cancel()
        console.log(response)
      },
      error:(e)=>{
        console.log(e)
      }
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
}
