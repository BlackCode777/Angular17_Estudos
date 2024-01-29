import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  username: string = 'YoungTech Mauro';
  favoriteFramework: string = '';
  userNamesArrays = [
    { id: 0, nome: 'Mauro', profession: 'Developer', age: 25 },
    { id: 1, nome: 'Paulo', profession: 'Developer', age: 25 },
    { id: 2, nome: 'Matheus', profession: 'Developer', age: 25 },
  ];

  //(ngModelChange) = onFavoriteFrameworkChange($event)
  onFavoriteFrameworkChange(favoriteFramework: string) {
    this.favoriteFramework = favoriteFramework;
  }
}
