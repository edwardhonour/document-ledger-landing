import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  first_name: any;
  last_name: any;
  middle_initial: any;
  phone_mobile: any;
  email: any;
  step: any = '1';
  error: any = '';

  constructor(private _dataService: DataService) { } 

  nextStep() {

  }
  
  postForm() {

    let formData: any = {
      email: this.email,
      first_name: this.first_name,
      middle_initial: this.middle_initial,
      last_name: this.last_name,
      phone_mobile: this.phone_mobile 
    }

    this._dataService.postRegister("post-register", formData).subscribe((data:any)=>{
      if (data?.error_code=="0") {
        this.step='2';
      } else {      
          this.error=data.error_dsc;
      }
    });
  }
}
