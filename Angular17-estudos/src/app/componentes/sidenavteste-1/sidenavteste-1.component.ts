import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenavteste-1',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage],
  templateUrl: './sidenavteste-1.component.html',
  styleUrl: './sidenavteste-1.component.scss',
})
export class Sidenavteste1Component {
  constructor() {}
}
