import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { ApplyComponent } from './third/apply/apply.component';
import { BalanceComponent } from './third/balance/balance.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
    { path: '' , component: FirstComponent},

    
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: 'third', component: ThirdComponent },
    { path: 'third/apply', component: ApplyComponent },
    { path: 'third/balance', component: BalanceComponent },

    { path: '**', component: PagenotfoundComponent }



    // { path: '**', redirectTo: 'first' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingcomponents=[FirstComponent,SecondComponent,ThirdComponent,ApplyComponent]

