import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import  {FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/shared/dialog.service';
import { Slip } from 'src/app/slip';
import { TransactionService } from 'src/app/transaction-service.service';
@Component({
  selector: 'app-credit-slip',
  templateUrl: './credit-slip.component.html',
  styleUrls: ['./credit-slip.component.css']
})
export class CreditSlipComponent implements OnInit {

  slipForm:FormGroup;
  slip:Slip;
  message:String;
  constructor(private formBuilder:FormBuilder,private dialogService:DialogService,private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.slipForm =this.formBuilder.group({
      
      slipId:['',[Validators.required,Validators.pattern("[0-9][0-9]{5}")]],
      accountNo:['',[Validators.required,Validators.pattern("[1-9][0-9]{9}")]],
      amount:['',[Validators.required,Validators.pattern("[1-9][0-9]{0,5}")]]

    });
  }

  done(){ 
    this.slip = new Slip();
    this.slip.accountNo=Number(this.slipForm.value.accountNo);
    this.slip.amount=Number(this.slipForm.value.amount);
    this.slip.slipId=Number(this.slipForm.value.slipId);
    console.log(this.slip);
    this.message=new String();
    this.transactionService.creditBySlip(this.slip).subscribe(
      data=>{
        this.message=data.message;
        this.dialogService.openConfirmDialog(this.message);
      }
    );
    
  }
  reset(){
    this.slipForm.reset;
  }

}

