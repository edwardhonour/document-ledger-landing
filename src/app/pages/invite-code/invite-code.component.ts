import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-invite-code',
  standalone: true,  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule],  templateUrl: './invite-code.component.html',
  styleUrls: ['./invite-code.component.css']
})

export class InviteCodeComponent {

  code: any;

  constructor(private _dataService: DataService, private _router: Router) { } 

  nextStep() {

  }
  
  postForm() {
    this._router.navigate(['/e',this.code])
}
}
