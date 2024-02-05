import { Component } from '@angular/core';
import { Passwords } from '../../../../passwords';
import { CommonModule } from '@angular/common';
import { PasswordItemComponent } from '../password-item/password-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-passwords',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PasswordItemComponent],
  templateUrl: './passwords.component.html',
  styleUrl: './passwords.component.css'
})
export class PasswordsComponent {

  passwords: any = [];

  constructor(private passwordService: PasswordService) {}

  ngOnInit():void {
    this.passwordService.getPasswords().subscribe((passwords)=>{this.passwords=passwords});
  }

}
