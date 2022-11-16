import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { CardComponent } from './card/card/card.component';
import { SharedModule } from './shared/shared.module';
import { ScoreComponent } from './score/score/score.component';
import { AuthService } from './core/service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { NewMoveComponent } from './newMove/new-move/new-move.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    ScoreComponent,
    HomeComponent,
    NewMoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
