import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import{FormsModule} from '@angular/forms';


import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FirstComponent } from './first/first.component';
// import { SecondComponent } from './second/second.component';
// import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents
    // FirstComponent,
    // SecondComponent,
    // ThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
