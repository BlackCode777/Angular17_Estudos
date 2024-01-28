import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SizerComponent } from './componentes/sizer/sizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    NgOptimizedImage,
    SizerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular17-estudos';

  fontSizePx = 16;

  userName = 'YoungTech Mauro';
  logoUrl = '/assets/achei.webp';
  logoAlt = 'logo alt';
}
