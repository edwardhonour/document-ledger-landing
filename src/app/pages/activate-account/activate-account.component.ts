import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent {

  data: any;
  error: any;
  

 constructor(
  private _activatedRoute: ActivatedRoute,
  private _router: Router,
  private _dataService: DataService
) { } 

postForm() {

  this._dataService.postRegister("post-password", this.data.formData).subscribe((data:any)=>{
    if (data?.error_code=="0") {
         localStorage.setItem('uid',data.uid)
         localStorage.setItem('role',data.role)
         localStorage.setItem('fa2','N')
         this._router.navigate(['/fa2-choice']);
    } else {      
        this.error="Invalid Email or Password";
    }
  });
}

ngOnInit(): void {
    this._activatedRoute.data.subscribe(({ 
    data })=> { 
        this.data=data;
    })   
}

}