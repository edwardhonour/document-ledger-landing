import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule, MatOptionModule, MatRadioModule, MatSelectModule],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  first_name: any;
  last_name: any;
  middle_initial: any;
  phone_mobile: any;
  personal: any = 'P';
  existing: any = 'X';
  org_name: any = '';
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
      personal: this.personal,
      org_name: this.org_name
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
