import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-item',
  standalone: true,
  imports: [FaIconComponent, CommonModule],
  templateUrl: './password-item.component.html',
  styleUrl: './password-item.component.css'
})
export class PasswordItemComponent {
  @Input() password: any;
  faCoffee = faCoffee;
}
