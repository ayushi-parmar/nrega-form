import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import{FormsModule} from '@angular/forms';


import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyComponent } from './third/apply/apply.component';
import { BalanceComponent } from './third/balance/balance.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { FirstComponent } from './first/first.component';
// import { SecondComponent } from './second/second.component';
// import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,

    ApplyComponent,
    BalanceComponent,
    PagenotfoundComponent,
    // FirstComponent,
    // SecondComponent,
    // ThirdComponent,
    // PageNotFoundComponenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
