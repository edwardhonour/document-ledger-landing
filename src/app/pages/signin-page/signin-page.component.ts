import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent {

  step: any = '1';
  username: any = '';
  password: any = '';
  otp: any = '';
  qr_url: any = '';
  data: any;
  showPassword: boolean = false;
  error: any = '';
  email: any = '';
  uid: any = 0;
  role: any = '';

  constructor(private _dataService: DataService, private _router: Router) { }

  startOver() {
    this.step='1';
    this.email='';
    this.password='';
    this.otp='';
  }
  nextStep() {
    if (this.step=='3') { 
      this.postOTP();
    }
    if (this.step=='2') { 
      this.postForm();
    }
    if (this.step=='1') { 
      if (this.email=='') {
        this.error="Invalid Email Address"
      } else {
        this.step='2';
        this.error="";
      }
    }
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  postForm() {
    this._dataService.postLogin(this.email, this.password).subscribe((data:any)=>{
      this.data=data;
      if (data?.error_code=="0") {
        if (data.fa2=='N') {
           localStorage.setItem('uid',data.uid)
           localStorage.setItem('role',data.role)
           localStorage.setItem('fa2','N')
           this._router.navigate(['/fa2-choice']);
        } else {
           this.step=3;
           this.uid=data.uid;
        }
      } else {      
          this.error="Invalid Email or Password";
      }
    });
  }

  postOTP() {
    this._dataService.post2FALogin(this.uid, this.otp).subscribe((data:any)=>{
      this.data=data;
      if (data?.error_code=="0") {
        localStorage.setItem('uid',this.uid)
        localStorage.setItem('role',this.role)
        localStorage.setItem('fa2','Y')
        location.replace('https://documentledger.org/app/index.html')
      } else {      
        this.error="Invalid OTP - Please Try Again";
      }
    });
  }

}
