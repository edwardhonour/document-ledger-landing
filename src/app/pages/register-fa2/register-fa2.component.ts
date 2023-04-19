import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register-fa2',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './register-fa2.component.html',
  styleUrls: ['./register-fa2.component.css']
})
export class RegisterFa2Component implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _dataService: DataService,
    public sanitizer: DomSanitizer
  ) { } 

  otp: any; 
  qrcode: any;
  data: any;
  error: any;

  
  postForm() {

    let formData: any = {
      email: this.otp
    }

    this._dataService.postRegister("post-register-2fa", formData).subscribe((data:any)=>{
      if (data?.error_code=="0") {
          location.replace("https://documentledger.org/app/index.html");
      } else {      
          this.error="Invalid code - Please Wait for the Next Code and Try Again";
      }
    });
  }

  nextStep() {

  }
  
  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({ 
    data })=> { 
        this.data=data;
        this.qrcode= this.sanitizer.bypassSecurityTrustResourceUrl(this.data.qrcode);
    })   
  }

}
