import { Component } from '@angular/core';
import { Passwords } from '../../../../passwords';
import { CommonModule } from '@angular/common';
import { PasswordItemComponent } from '../password-item/password-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordService } from '../../services/password.service';
import { AddPasswordComponent } from '../add-password/add-password.component';
import { PwAddedEvent } from '../../services/pwaddedEvent.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passwords',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PasswordItemComponent, AddPasswordComponent],
  templateUrl: './passwords.component.html',
  styleUrl: './passwords.component.css'
})
export class PasswordsComponent {

  passwords: any = [];

  private subscription: Subscription;

  constructor(private passwordService: PasswordService, private pwAddedEvent: PwAddedEvent, private router: Router) {
    
    this.subscription = this.pwAddedEvent.reloadComponent$.subscribe(() => {
      // Reload logic for Component B
      this.reloadComponent();
    });
  }

  ngOnInit():void {
    this.passwordService.getPasswords().subscribe((passwords)=>{this.passwords=passwords});
  }

  // TODO: Replace all the instances of any with Password object type
  deletePassword(password:any) {
    this.passwordService.deletePassword(password).subscribe(()=>(this.passwords = this.passwords.filter((p: { id: any; text: any; account: any; reminder: any; })=>p.id !== password.id)));
  }

  private reloadComponent() {
    // TODO: Replace this code such that the whole window does not have to reload. 
    window.location.reload();
  }

}
