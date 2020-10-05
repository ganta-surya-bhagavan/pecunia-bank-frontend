import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PassbookComponent } from './modules/passbook/passbook.component';
import { AddAtmComponent } from './modules/add-atm/add-atm.component'
import { BlockCardComponent } from './modules/block-card/block-card.component';
import { AccountSummaryComponent } from './modules/account-summary/account-summary.component';
import { CreditSlipComponent } from './modules/credit-slip/credit-slip.component';
import { CreditChequeComponent } from './modules/credit-cheque/credit-cheque.component';
import { DebitSlipComponent } from './modules/debit-slip/debit-slip.component';
import { DebitChequeComponent } from './modules/debit-cheque/debit-cheque.component';

const routes: Routes = [
  {path:'',component:DefaultComponent,
    children:[{
      path:'',component: DashboardComponent
    },{
      path:'passbook',component:PassbookComponent
  },{path:'add-atm',component:AddAtmComponent},
  {path:'block-card',component:BlockCardComponent},
  {path:'account-summary',component:AccountSummaryComponent},
  {path:'credit-slip',component:CreditSlipComponent},
  {path:'credit-cheque',component:CreditChequeComponent},
  {path:'debit-slip',component:DebitSlipComponent},
  {path:'debit-cheque',component:DebitChequeComponent}

]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
