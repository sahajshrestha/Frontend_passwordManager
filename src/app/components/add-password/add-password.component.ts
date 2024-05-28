import { Component, NgModule } from '@angular/core';
import { PasswordService } from '../../services/password.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { PwAddedEvent } from '../../services/pwaddedEvent.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-password',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './add-password.component.html',
  styleUrl: './add-password.component.css'
})
export class AddPasswordComponent {
  text: string;
  account: string;
  reminder: boolean = false;
  showAddPassword: boolean;
  subscription: Subscription;

  constructor(private passwordService: PasswordService, private pwAddedEvent: PwAddedEvent, private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddPassword = value));
  }

  ngOnInit():void {
    
  }

  onSubmit() {
    if(!this.text) {
      alert('Pleae add text');
      return;
    }
    const newPassword = {
      text:this.text,
      account:this.account,
      reminder:this.reminder
    }
    this.addPassword(newPassword);
    this.pwAddedEvent.triggerReload();

  }

  addPassword(passwordData: any) {
    // console.log('Something');
    this.passwordService.addPassword(passwordData).subscribe(()=>(console.log('Password added')));
  }

}
