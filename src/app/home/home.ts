import { Component } from '@angular/core';
import { Categories } from '../categories/categories';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Categories],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}