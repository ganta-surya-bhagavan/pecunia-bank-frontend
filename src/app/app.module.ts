import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditSlipComponent } from './modules/credit-slip/credit-slip.component';
import { CreditChequeComponent } from './modules/credit-cheque/credit-cheque.component';
import { DebitChequeComponent } from './modules/debit-cheque/debit-cheque.component';
import { DebitSlipComponent } from './modules/debit-slip/debit-slip.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatConfirmDialogComponent } from './modules/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { TransactionService } from './transaction-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CreditSlipComponent,
    CreditChequeComponent,
    DebitChequeComponent,
    DebitSlipComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent]
})
export class AppModule { }
