import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}

// ! aula 7 link:
// ? https://www.youtube.com/watch?v=MK1FLZn3Jbc&list=PLXEUJjGpEX7zwdFSAzIPiSf9p0tOeI1Yu&index=7
