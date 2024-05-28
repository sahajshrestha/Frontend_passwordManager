import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {UiService} from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string = 'password-manager';
  showAddPassword: boolean;
  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddPassword = value));
  }

  toggleFun() {
    this.uiService.toggleAddPassword();
  }
}
