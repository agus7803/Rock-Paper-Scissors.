import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CardComponent } from '../card/card/card.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'card', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
