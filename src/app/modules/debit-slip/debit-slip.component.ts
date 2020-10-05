import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/dialog.service';
import { Slip } from 'src/app/slip';
import { TransactionService } from 'src/app/transaction-service.service';
@Component({
  selector: 'app-debit-slip',
  templateUrl: './debit-slip.component.html',
  styleUrls: ['./debit-slip.component.css']
})
export class DebitSlipComponent implements OnInit {

  slipForm:FormGroup;
  slip:Slip;
  message:String;
  constructor(private formBuilder:FormBuilder,private transactionService:TransactionService,private dialogService:DialogService) { }
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
    this.transactionService.debitBySlip(this.slip).subscribe(
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
