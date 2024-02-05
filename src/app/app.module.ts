import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {PasswordsComponent } from './components/passwords/passwords.component';
import { PasswordService } from './services/password.service';

@NgModule({
  declarations: [PasswordsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PasswordService],
  bootstrap: [PasswordsComponent],
})
export class AppModule {}