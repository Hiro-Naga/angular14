import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent implements OnInit {

  constructor() { }
  message: String = '初期値';

  ngOnInit(): void {
  }

}
