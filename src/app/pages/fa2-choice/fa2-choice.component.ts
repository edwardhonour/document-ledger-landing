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
  selector: 'app-fa2-choice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fa2-choice.component.html',
  styleUrls: ['./fa2-choice.component.css']
})
export class Fa2ChoiceComponent {

  gotoApp() {
    location.replace("https://documentledger.org/app/index.html");
  }

}
