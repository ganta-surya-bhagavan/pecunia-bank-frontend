import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cheque } from 'src/app/Cheque';
import { DialogService } from 'src/app/shared/dialog.service';
import { TransactionService } from 'src/app/transaction-service.service';

@Component({
  selector: 'app-debit-cheque',
  templateUrl: './debit-cheque.component.html',
  styleUrls: ['./debit-cheque.component.css']
})
export class DebitChequeComponent implements OnInit {
  chequeForm:FormGroup;
  cheque:Cheque;
  message:String;
  constructor(private formBuilder:FormBuilder,private dialogService:DialogService,private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.chequeForm =this.formBuilder.group({
      
      chequeNo:['',[Validators.required,Validators.pattern("[0-9][0-9]{5}")]],
      accountNo:['',[Validators.required,Validators.pattern("[1-9][0-9]{9}")]],
      amount:['',[Validators.required,Validators.pattern("[1-9][0-9]{0,5}")]],
      ifscCode:['',[Validators.required,Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]],
      date:['',[Validators.required]]

    });
  }

  done(){
    this.cheque= new Cheque();
    this.cheque.accountNo=Number(this.chequeForm.value.accountNo);
    this.cheque.issueDate=this.chequeForm.value.date;
    this.cheque.amount=Number(this.chequeForm.value.amount);
    this.cheque.chequeNo=Number(this.chequeForm.value.chequeNo);
    this.cheque.ifscCode=this.chequeForm.value.ifscCode;
    console.log(this.cheque);
    this.message=new String();
    this.transactionService.debitByCheque(this.cheque).subscribe(
      data=>{
        this.message=data.message;
        this.dialogService.openConfirmDialog(this.message);
      }
    );
  }

}
