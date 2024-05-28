import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onDeletePassword = new EventEmitter();
  faCoffee = faCoffee;

  onDelete(password: any) {
    this.onDeletePassword.emit(password);
  }
}
