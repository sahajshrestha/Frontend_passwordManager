import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PasswordService } from './app/services/password.service';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [PasswordService, importProvidersFrom(HttpClientModule)]
})
  .catch((err) => console.error(err));
