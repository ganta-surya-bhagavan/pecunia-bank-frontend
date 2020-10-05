import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCheque } from 'src/app/CreditCheque';
import { DialogService } from 'src/app/shared/dialog.service';
import { TransactionService } from 'src/app/transaction-service.service';

@Component({
  selector: 'app-credit-cheque',
  templateUrl: './credit-cheque.component.html',
  styleUrls: ['./credit-cheque.component.css']
})
export class CreditChequeComponent implements OnInit {

  chequeForm:FormGroup;
  creditCheque:CreditCheque;
  message:String;
  constructor(private formBuilder:FormBuilder,private dialogService:DialogService,private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.chequeForm =this.formBuilder.group({
      
      chequeNo:['',[Validators.required,Validators.pattern("[0-9][0-9]{5}")]],
      payeeAccountNo:['',[Validators.required,Validators.pattern("[1-9][0-9]{9}")]],
      beneficiaryAccountNo:['',[Validators.required,Validators.pattern("[1-9][0-9]{9}")]],
      amount:['',[Validators.required,Validators.pattern("[1-9][0-9]{0,5}")]],
      ifscCode:['',[Validators.required,Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]],
      date:['',[Validators.required]]


    });
  }

  done(){
    this.creditCheque = new CreditCheque();
    this.creditCheque.accountNo=Number(this.chequeForm.value.payeeAccountNo);
    this.creditCheque.beneficiaryAccountNo=Number(this.chequeForm.value.beneficiaryAccountNo);
    this.creditCheque.issueDate=this.chequeForm.value.date;
    this.creditCheque.amount=Number(this.chequeForm.value.amount);
    this.creditCheque.chequeNo=Number(this.chequeForm.value.chequeNo);
    this.creditCheque.ifscCode=this.chequeForm.value.ifscCode;
    console.log(this.creditCheque);
    this.message=new String();
    this.transactionService.creditByCheque(this.creditCheque).subscribe(
      data=>{
        this.message=data.message;
        this.dialogService.openConfirmDialog(this.message);
      }
    );

  }
  reset(){
    this.chequeForm.reset;
  }

}
