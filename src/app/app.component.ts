import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PasswordsComponent } from './components/passwords/passwords.component';

// With the latest change in the Angular 17, we'd need to inport components, here HeaderComponent , and NOT moduler. 
// Basically, a component can import other component, just as in React. 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PasswordsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
