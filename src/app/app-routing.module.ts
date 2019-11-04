import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [];

@NgModule({
  declarations: [ 
    // FirstComponent, SecondComponent, ThirdComponent
  ],
  imports: [RouterModule.forRoot([
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: 'third', component: ThirdComponent },
    { path: '**', redirectTo: 'first' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingcomponents=[FirstComponent,SecondComponent,ThirdComponent]

