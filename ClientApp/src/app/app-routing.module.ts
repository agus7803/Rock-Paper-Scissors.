import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CardComponent } from './card/card/card.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'', 
  children:[
    {path:'card', component:CardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
